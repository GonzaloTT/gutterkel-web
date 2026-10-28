import Button from "../Button/Button";

function TechnicalSheetDownload({ technicalSheet, className }) {
  if (!technicalSheet) return null;

  return (
    <Button
      href={technicalSheet.href}
      download
      variant="outline"
      className={className}
    >
      {technicalSheet.label}
    </Button>
  );
}

export default TechnicalSheetDownload;
