export interface ReplaceRule {
  id: string;
  find: string;
  replace: string;
}

export interface FileData {
  id: string;
  file: File;
  name: string;
  size: number;
  content: string;
}

export interface ProcessedFile {
  id: string;
  originalName: string;
  originalContent: string;
  processedContent: string;
  replacements: number;
}

export interface ProcessingResult {
  files: ProcessedFile[];
  totalFilesProcessed: number;
  totalFilesChanged: number;
  totalReplacements: number;
}

export const SUPPORTED_EXTENSIONS = [
  // Code
  ".js", ".jsx", ".ts", ".tsx", ".py", ".java", ".cs", ".cpp", ".c", ".h",
  ".go", ".rs", ".php", ".rb", ".swift", ".kt",
  // Data / Config
  ".json", ".jsonc", ".xml", ".yaml", ".yml", ".csv", ".toml", ".ini",
  ".env", ".properties", ".config",
  // Web / Text
  ".html", ".css", ".scss", ".sql", ".graphql", ".md", ".mdx", ".txt"
];

export function isSupportedExtension(filename: string): boolean {
  const lowerName = filename.toLowerCase();
  return SUPPORTED_EXTENSIONS.some(ext => lowerName.endsWith(ext));
}

function escapeLiteral(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export function processSingleFile(content: string, rules: ReplaceRule[]): { processedContent: string; replacements: number } {
  let currentContent = content;
  let totalReplacements = 0;

  for (const rule of rules) {
    if (!rule.find) continue; // Skip empty find rules
    
    // Literal replacement globally
    // If find and replace are identical, we just want to count occurrences without changing
    const regex = new RegExp(escapeLiteral(rule.find), 'g');
    
    // Count matches
    const matches = currentContent.match(regex);
    const count = matches ? matches.length : 0;
    
    totalReplacements += count;
    
    if (count > 0 && rule.find !== rule.replace) {
      // Use split/join or string.replace with replacer function returning literal string to avoid special replacement patterns like $$ or $&
      currentContent = currentContent.replace(regex, () => rule.replace);
    }
  }

  return {
    processedContent: currentContent,
    replacements: totalReplacements
  };
}

export function processFiles(filesData: FileData[], rules: ReplaceRule[]): ProcessingResult {
  const validRules = rules.filter(r => r.find.length > 0);
  
  const files: ProcessedFile[] = filesData.map(fd => {
    const { processedContent, replacements } = processSingleFile(fd.content, validRules);
    return {
      id: fd.id,
      originalName: fd.name,
      originalContent: fd.content,
      processedContent,
      replacements
    };
  });

  const totalFilesProcessed = files.length;
  const totalFilesChanged = files.filter(f => f.replacements > 0).length;
  const totalReplacements = files.reduce((acc, f) => acc + f.replacements, 0);

  return {
    files,
    totalFilesProcessed,
    totalFilesChanged,
    totalReplacements
  };
}
