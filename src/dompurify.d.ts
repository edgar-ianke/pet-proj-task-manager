declare module 'dompurify' {
    const DOMPurify: {
      sanitize: (dirty: string) => string;
    };
    export default DOMPurify;
  }