"use client";

import * as React from "react";
import { Replace, Upload, Plus, Trash2, Download, AlertCircle, FileType, CheckCircle2, RotateCcw } from "lucide-react";
import { 
  ReplaceRule, 
  FileData, 
  ProcessingResult, 
  isSupportedExtension, 
  SUPPORTED_EXTENSIONS, 
  processFiles 
} from "@/lib/bulk-replace-engine";
import {
  logFilesSelected,
  logReplacementRuleCreated,
  logReplacementRulesCreatedBulk,
  logReplacementCompleted,
  logDownloadStarted
} from "@/lib/analytics";

function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function BulkReplaceApp() {
  const [files, setFiles] = React.useState<FileData[]>([]);
  const [rules, setRules] = React.useState<ReplaceRule[]>([{ id: crypto.randomUUID(), find: "", replace: "" }]);
  const [isDragging, setIsDragging] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [skippedFiles, setSkippedFiles] = React.useState<string[]>([]);
  
  const [activeTab, setActiveTab] = React.useState<"manual" | "bulk">("manual");
  const [bulkFindList, setBulkFindList] = React.useState("");
  const [bulkReplaceList, setBulkReplaceList] = React.useState("");
  const [bulkPairs, setBulkPairs] = React.useState<{find: string, replace: string}[] | null>(null);
  const [bulkError, setBulkError] = React.useState<string | null>(null);

  const [previewResult, setPreviewResult] = React.useState<ProcessingResult | null>(null);
  const [hasProcessed, setHasProcessed] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const TOTAL_LIMIT = 50 * 1024 * 1024;
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  const isOverLimit = totalSize > TOTAL_LIMIT;

  const generateBulkPairs = () => {
    const fText = bulkFindList.replace(/\r?\n$/, '');
    const rText = bulkReplaceList.replace(/\r?\n$/, '');
    
    const findLines = bulkFindList === "" ? [] : fText.split(/\r?\n/);
    const replaceLines = bulkReplaceList === "" && bulkFindList === "" ? [] : rText.split(/\r?\n/);
    
    if (findLines.length === 0) {
      setBulkError("Find list cannot be empty.");
      return;
    }
    
    if (findLines.length !== replaceLines.length) {
      setBulkError(`Both lists must contain the same number of items. Find list: ${findLines.length}, Replace list: ${replaceLines.length}`);
      return;
    }
    
    const pairs = [];
    for (let i = 0; i < findLines.length; i++) {
      if (findLines[i] === "") {
        setBulkError(`Blank lines are not allowed in the Find list (Line ${i + 1}).`);
        return;
      }
      pairs.push({ find: findLines[i], replace: replaceLines[i] });
    }
    
    setBulkError(null);
    setBulkPairs(pairs);
  };

  const applyBulkPairs = () => {
    if (!bulkPairs) return;
    const newRules: ReplaceRule[] = bulkPairs.map(p => ({
      id: crypto.randomUUID(),
      find: p.find,
      replace: p.replace
    }));
    
    let currentRules = [...rules];
    if (currentRules.length === 1 && currentRules[0].find === "" && currentRules[0].replace === "") {
      currentRules = [];
    }
    setRules([...currentRules, ...newRules]);
    
    // Log multiple replacement rules created
    if (newRules.length > 0) {
      logReplacementRulesCreatedBulk(newRules.length);
    }

    setBulkPairs(null);
    setBulkFindList("");
    setBulkReplaceList("");
    setActiveTab("manual");
    setHasProcessed(false);
    setPreviewResult(null);
  };

  const handlePreview = () => {
    if (files.length === 0 || isOverLimit) return;
    setIsProcessing(true);
    setTimeout(() => {
      const result = processFiles(files, rules);
      setPreviewResult(result);
      setIsProcessing(false);
    }, 10);
  };

  const handleFilesAdded = async (fileList: FileList | File[]) => {
    setError(null);
    const newFiles: FileData[] = [];
    const newSkipped: string[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      
      if (!isSupportedExtension(file.name)) {
        newSkipped.push(file.name);
        continue;
      }

      if (files.some(f => f.name === file.name && f.size === file.size)) {
        continue;
      }

      const content = await file.text();
      newFiles.push({
        id: crypto.randomUUID(),
        file,
        name: file.name,
        size: file.size,
        content
      });
    }

    if (newSkipped.length > 0) {
      setSkippedFiles(prev => Array.from(new Set([...prev, ...newSkipped])));
    }

    if (newFiles.length > 0) {
      setFiles(prev => [...prev, ...newFiles]);
      setHasProcessed(false);
      
      const addedSize = newFiles.reduce((acc, f) => acc + f.size, 0);
      logFilesSelected(newFiles.length, addedSize);
    }
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFilesAdded(e.dataTransfer.files);
    }
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setHasProcessed(false);
  };

  const clearAll = () => {
    setFiles([]);
    setRules([{ id: crypto.randomUUID(), find: "", replace: "" }]);
    setPreviewResult(null);
    setHasProcessed(false);
    setError(null);
    setBulkFindList("");
    setBulkReplaceList("");
    setBulkPairs(null);
    setBulkError(null);
    setSkippedFiles([]);
  };

  const addRule = () => {
    setRules(prev => [...prev, { id: crypto.randomUUID(), find: "", replace: "" }]);
    setHasProcessed(false);
    setPreviewResult(null);
    logReplacementRuleCreated();
  };

  const updateRule = (id: string, field: "find" | "replace", value: string) => {
    setRules(prev => prev.map(r => r.id === id ? { ...r, [field]: value } : r));
    setHasProcessed(false);
    setPreviewResult(null);
  };

  const removeRule = (id: string) => {
    setRules(prev => prev.filter(r => r.id !== id));
    setHasProcessed(false);
    setPreviewResult(null);
  };

  const handleProcess = () => {
    if (files.length === 0 || isOverLimit) {
      if (!isOverLimit) setError("Please add at least one file to process.");
      return;
    }

    const hasEmptyFind = rules.some(r => r.find.trim() === "");
    if (hasEmptyFind) {
      setError("Find value cannot be empty in any rule.");
      return;
    }

    const validRules = rules.filter(r => r.find.length > 0);
    if (validRules.length === 0) {
      setError("Please add at least one valid replacement rule.");
      return;
    }

    setError(null);
    setIsProcessing(true);
    
    // Process is already computed in previewResult, but we recompute to be safe
    const result = processFiles(files, rules);
    setPreviewResult(result);
    setHasProcessed(true);
    setIsProcessing(false);
    
    logReplacementCompleted(files.length, validRules.length, result.totalReplacements);
  };

  const handleDownload = async () => {
    if (!previewResult || previewResult.files.length === 0) return;
    
    logDownloadStarted();

    if (previewResult.files.length === 1) {
      // Single file download
      const file = previewResult.files[0];
      const blob = new Blob([file.processedContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.originalName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      // Multiple files -> ZIP
      setIsProcessing(true);
      try {
        const JSZip = (await import("jszip")).default;
        const zip = new JSZip();
        
        // Handle name collisions
        const nameCounts = new Map<string, number>();
        
        previewResult.files.forEach(file => {
          let fileName = file.originalName;
          if (nameCounts.has(fileName)) {
            const count = nameCounts.get(fileName)! + 1;
            nameCounts.set(fileName, count);
            const dotIdx = fileName.lastIndexOf('.');
            if (dotIdx > -1) {
              fileName = `${fileName.substring(0, dotIdx)} (${count})${fileName.substring(dotIdx)}`;
            } else {
              fileName = `${fileName} (${count})`;
            }
          } else {
            nameCounts.set(fileName, 1);
          }
          
          zip.file(fileName, file.processedContent);
        });
        
        const blob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "replacekit-processed.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (err) {
        console.error("ZIP Generation error", err);
        setError("Failed to generate ZIP file.");
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-col overflow-x-hidden p-4 md:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Replace className="h-6 w-6 text-accent" />
            Bulk Find & Replace
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Apply sequential replacement rules across multiple files. 
            <span className="font-medium text-foreground ml-1">Files are processed locally in your browser.</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={clearAll}
            data-testid="clear-all-btn"
            className="rounded-md border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
          >
            Clear All
          </button>
        </div>
      </div>

      {isOverLimit && (
        <div className="mb-6 flex items-center gap-2 rounded-md border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-500" data-testid="size-limit-error">
          <AlertCircle className="h-4 w-4" />
          Total file size exceeds the 50 MB limit. Remove some files to continue.
        </div>
      )}

      {error && !isOverLimit && (
        <div className="mb-6 flex items-center gap-2 rounded-md border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-500" data-testid="error-message">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
        
        {/* Left Column: Rules & Preview */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          
          {/* Rules Section */}
          <div className="rounded-xl border bg-surface p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Replacement Rules</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveTab('manual')}
                  data-testid="tab-manual"
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${activeTab === 'manual' ? 'bg-accent text-accent-foreground shadow-sm' : 'bg-background border border-border text-muted-foreground hover:bg-surface-hover'}`}
                >
                  Manual Editor
                </button>
                <button 
                  onClick={() => setActiveTab('bulk')}
                  data-testid="tab-bulk"
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${activeTab === 'bulk' ? 'bg-accent text-accent-foreground shadow-sm' : 'bg-background border border-border text-muted-foreground hover:bg-surface-hover'}`}
                >
                  Bulk Pair Lists
                </button>
              </div>
            </div>
            
            {activeTab === 'manual' ? (
              <div className="flex flex-col gap-3">
                <div className="flex justify-end mb-1">
                  <button 
                    onClick={addRule}
                    data-testid="add-rule-btn"
                    className="flex items-center gap-1 rounded text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    <Plus className="h-3 w-3" /> Add Rule
                  </button>
                </div>
                {rules.map((rule, index) => (
                  <div key={rule.id} className="group relative flex items-start gap-2 rounded-lg border border-border/50 bg-background/50 p-3" data-testid="rule-row">
                    <div className="mt-2 text-xs font-medium text-muted-foreground w-4 text-center">{index + 1}</div>
                    <div className="flex flex-1 flex-col sm:flex-row gap-2">
                      <div className="flex-1">
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Find (Literal)</label>
                        <input
                          type="text"
                          value={rule.find}
                          onChange={(e) => updateRule(rule.id, "find", e.target.value)}
                          placeholder="Search string..."
                          data-testid={`rule-find-${index}`}
                          className="w-full rounded-md border bg-background px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Replace with</label>
                        <input
                          type="text"
                          value={rule.replace}
                          onChange={(e) => updateRule(rule.id, "replace", e.target.value)}
                          placeholder="Replacement string..."
                          data-testid={`rule-replace-${index}`}
                          className="w-full rounded-md border bg-background px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => removeRule(rule.id)}
                      disabled={rules.length === 1}
                      data-testid={`remove-rule-${index}`}
                      className="mt-[18px] flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-red-500/10 hover:text-red-500 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-muted-foreground"
                      aria-label="Remove rule"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-muted-foreground mb-1 block">Find List</label>
                    <textarea 
                      value={bulkFindList} 
                      onChange={e => { setBulkFindList(e.target.value); setBulkPairs(null); setBulkError(null); }}
                      className="w-full h-40 font-mono text-sm p-3 rounded-md border bg-background text-foreground resize-y focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="old-api&#10;debug=true"
                      data-testid="bulk-find-textarea"
                    />
                    <div className="text-xs text-muted-foreground mt-1" data-testid="bulk-find-count">
                      {bulkFindList === "" ? 0 : bulkFindList.replace(/\r?\n$/, '').split(/\r?\n/).length} items
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-muted-foreground mb-1 block">Replace List</label>
                    <textarea 
                      value={bulkReplaceList} 
                      onChange={e => { setBulkReplaceList(e.target.value); setBulkPairs(null); setBulkError(null); }}
                      className="w-full h-40 font-mono text-sm p-3 rounded-md border bg-background text-foreground resize-y focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="new-api&#10;debug=false"
                      data-testid="bulk-replace-textarea"
                    />
                    <div className="text-xs text-muted-foreground mt-1" data-testid="bulk-replace-count">
                      {bulkReplaceList === "" && bulkFindList === "" ? 0 : bulkReplaceList.replace(/\r?\n$/, '').split(/\r?\n/).length} items
                    </div>
                  </div>
                </div>
                
                {bulkError && (
                  <div className="text-red-500 text-sm flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-md" data-testid="bulk-error">
                    <AlertCircle className="w-4 h-4 shrink-0" /> {bulkError}
                  </div>
                )}
                
                <button 
                  onClick={generateBulkPairs}
                  data-testid="bulk-generate-btn"
                  className="w-full py-2 bg-surface-hover border border-border rounded-md text-sm font-bold text-foreground hover:bg-accent/10 hover:text-accent hover:border-accent/50 transition-colors"
                >
                  Generate Pairs
                </button>

                {bulkPairs && (
                  <div className="mt-2 p-4 border border-accent/30 rounded-lg bg-accent/5">
                    <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-foreground">
                      Pairing Preview
                      <span className="text-xs font-normal text-muted-foreground">({bulkPairs.length} pairs)</span>
                    </h3>
                    <div className="max-h-48 overflow-y-auto bg-background rounded-md border border-border/50 p-3 mb-4 text-sm font-mono flex flex-col gap-1.5 shadow-inner">
                      {bulkPairs.slice(0, 100).map((p, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <span className="text-muted-foreground/60 w-6 text-right shrink-0 select-none">{i + 1}.</span>
                          <span className="truncate flex-1 text-foreground" title={p.find}>{p.find}</span>
                          <span className="text-muted-foreground/50 shrink-0 select-none">→</span>
                          <span className="truncate flex-1 text-accent" title={p.replace}>{p.replace}</span>
                        </div>
                      ))}
                      {bulkPairs.length > 100 && (
                        <div className="text-muted-foreground text-xs text-center pt-2 mt-1 border-t border-border/50 italic">
                          Showing 100 of {bulkPairs.length} pairs
                        </div>
                      )}
                    </div>
                    <button 
                      onClick={applyBulkPairs}
                      data-testid="bulk-use-rules-btn"
                      className="w-full py-2.5 bg-accent text-accent-foreground rounded-md text-sm font-bold hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                    >
                      Use These Rules
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Preview Section */}
          <div className="rounded-xl border bg-surface p-5 shadow-sm">
            <h2 className="mb-4 text-base font-semibold text-foreground">Preview & Results</h2>
            
            {files.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center" data-testid="preview-empty">
                <FileType className="mb-3 h-8 w-8 text-muted-foreground/50" />
                <p className="text-sm font-medium text-muted-foreground">No files to preview</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Add files to see replacement statistics</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2" data-testid="preview-list">
                {previewResult?.files.map((file) => {
                  const hasChanges = file.replacements > 0;
                  return (
                    <div key={file.id} className="flex items-center justify-between rounded-lg border bg-background/50 px-4 py-3" data-testid={`preview-item-${file.originalName}`}>
                      <div className="flex items-center gap-3">
                        {hasChanges ? (
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                        )}
                        <span className="text-sm font-medium text-foreground">{file.originalName}</span>
                      </div>
                      <span className={`text-xs font-semibold ${hasChanges ? "text-accent" : "text-muted-foreground"}`}>
                        {hasChanges ? `${file.replacements} replacement${file.replacements === 1 ? '' : 's'}` : "No changes"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Files & Actions */}
        <div className="flex flex-col gap-6 order-1 lg:order-2">
          
          <div className="rounded-xl border bg-surface p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Files <span className="text-xs font-normal text-muted-foreground ml-1">({files.length})</span></h2>
            </div>

            <div 
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              data-testid="drop-zone"
              className={`mb-4 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed py-8 text-center transition-colors ${
                isDragging ? "border-accent bg-accent/5" : (isOverLimit ? "border-red-500/50 bg-red-500/5" : "border-border hover:bg-surface-hover")
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className={`mb-3 h-6 w-6 ${isDragging ? "text-accent" : (isOverLimit ? "text-red-500" : "text-muted-foreground")}`} />
              <p className="text-sm font-medium text-foreground">Drop files here</p>
              <p className="mt-1 text-xs text-muted-foreground">or click to select</p>
              <div className="mt-4 flex flex-col items-center gap-1">
                <p className="text-xs font-semibold text-foreground">Text & code files &middot; 50 MB total</p>
                <p className="text-[10px] text-muted-foreground">Files are processed locally in your browser.</p>
              </div>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={(e) => {
                  if (e.target.files) handleFilesAdded(e.target.files);
                }}
                className="hidden"
                data-testid="file-input"
                accept={SUPPORTED_EXTENSIONS.join(",")}
              />
            </div>

            <details className="mb-4 group text-xs text-muted-foreground">
              <summary className="cursor-pointer list-none font-medium hover:text-foreground inline-flex items-center gap-1 select-none">
                <span className="group-open:rotate-90 transition-transform">▶</span>
                Supported file types
              </summary>
              <div className="mt-3 pl-3 flex flex-col gap-3 border-l-2 border-border">
                <div>
                  <div className="font-semibold text-foreground mb-1">Code</div>
                  <div>.js · .jsx · .ts · .tsx · .py · .java · .cs · .cpp · .c · .h<br/>.go · .rs · .php · .rb · .swift · .kt</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Data & Config</div>
                  <div>.json · .jsonc · .xml · .yaml · .yml · .csv · .toml<br/>.ini · .env · .properties · .config</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Web & Text</div>
                  <div>.html · .css · .scss · .sql · .graphql · .md · .mdx · .txt</div>
                </div>
              </div>
            </details>

            <div className={`mb-4 flex items-center justify-between text-xs font-semibold rounded-md p-2 border ${
              isOverLimit ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
              totalSize > TOTAL_LIMIT * 0.9 ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' : 
              'bg-background text-muted-foreground border-border'
            }`}>
              <span>Total size usage</span>
              <span data-testid="size-indicator">{formatBytes(totalSize)} / 50 MB</span>
            </div>

            {skippedFiles.length > 0 && (
              <div className="mb-4" data-testid="skipped-files">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold uppercase text-muted-foreground">Skipped files</h3>
                  <button 
                    onClick={() => setSkippedFiles([])}
                    className="text-[10px] text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                </div>
                <div className="flex flex-col gap-1 max-h-[100px] overflow-y-auto">
                  {skippedFiles.map(name => (
                    <div key={name} className="text-xs text-muted-foreground flex justify-between truncate" title={name}>
                      <span className="truncate mr-2 line-through opacity-70">{name}</span>
                      <span className="shrink-0 text-[10px]">Unsupported file type</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {files.length > 0 && (
              <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto pr-1">
                {files.map(file => (
                  <div key={file.id} className="flex items-center justify-between rounded bg-background px-3 py-2 border" data-testid={`file-item-${file.name}`}>
                    <div className="flex flex-col overflow-hidden">
                      <span className="truncate text-xs font-medium text-foreground">{file.name}</span>
                      <span className="text-[10px] text-muted-foreground">{formatBytes(file.size)}</span>
                    </div>
                    <button
                      onClick={() => removeFile(file.id)}
                      className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors"
                    >
                      <XIcon className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-xl border bg-surface p-5 shadow-sm sticky top-[88px]">
            <h2 className="mb-4 text-base font-semibold text-foreground">Summary</h2>
            
            <div className="mb-6 flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Files to process:</span>
                <span className="font-semibold text-foreground">{files.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Files changing:</span>
                <span className="font-semibold text-foreground" data-testid="stat-files-changed">{previewResult?.totalFilesChanged || 0}</span>
              </div>
              <div className="flex justify-between border-t pt-3 mt-1">
                <span className="font-medium text-foreground">Total replacements:</span>
                <span className="font-bold text-accent" data-testid="stat-replacements">{previewResult?.totalReplacements || 0}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {!hasProcessed ? (
                <>
                  <button
                    onClick={handlePreview}
                    disabled={files.length === 0 || rules.filter(r => r.find.trim() !== "").length === 0 || isProcessing || isOverLimit}
                    data-testid="preview-btn"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-accent/50 bg-transparent px-4 py-3 text-sm font-bold text-accent transition-all hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50"
                  >
                    Preview Changes
                  </button>
                  <button
                    onClick={handleProcess}
                    disabled={files.length === 0 || isProcessing || isOverLimit}
                    data-testid="replace-all-btn"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Replace All
                  </button>
                </>
              ) : (
                <button
                  onClick={handleDownload}
                  disabled={isProcessing || previewResult?.files.length === 0 || isOverLimit}
                  data-testid="download-btn"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50"
                >
                  <Download className="h-4 w-4" />
                  Download Processed
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

// Simple internal X icon for file list
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
