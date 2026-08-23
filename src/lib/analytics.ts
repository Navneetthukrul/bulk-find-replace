export const GA_MEASUREMENT_ID = 'G-G2PRBWP394';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const logEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
      window.gtag = function() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
    }
    window.gtag('event', action, params);
  }
};

export const logFilesSelected = (count: number, totalSizeBytes: number) => {
  let sizeBucket = '<1MB';
  if (totalSizeBytes > 10 * 1024 * 1024) {
    sizeBucket = '>10MB';
  } else if (totalSizeBytes >= 1024 * 1024) {
    sizeBucket = '1MB-10MB';
  }

  logEvent('files_selected', {
    number_of_files: count,
    file_size_bucket: sizeBucket,
  });
};

export const logReplacementRuleCreated = () => {
  logEvent('replacement_rule_created');
};

export const logReplacementRulesCreatedBulk = (count: number) => {
  logEvent('replacement_rules_created', {
    number_of_rules: count
  });
};

export const logReplacementCompleted = (fileCount: number, ruleCount: number, totalReplacements: number) => {
  logEvent('replacement_completed', {
    number_of_files: fileCount,
    number_of_replacement_rules: ruleCount,
    number_of_replacements: totalReplacements,
  });
};

export const logDownloadStarted = () => {
  logEvent('download_started');
};
