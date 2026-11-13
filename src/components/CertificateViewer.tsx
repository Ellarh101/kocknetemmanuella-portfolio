import { Download } from "lucide-react";
import type { Certification } from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export function CertificateViewer({
  cert,
  onClose,
}: {
  cert: Certification | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!cert} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[92vh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto border-border bg-card p-4 sm:p-6">
        {cert && (
          <>
            <div className="pr-8">
              <DialogTitle className="font-display text-lg text-foreground">
                {cert.title}
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-ash/80">
                {cert.issuer}
                {cert.date ? ` · ${cert.date}` : ""}
              </DialogDescription>
            </div>
            {cert.pendingUpload ? (
              <p className="rounded-md border border-border bg-secondary/40 p-5 text-sm text-muted-foreground">
                The certificate file has not been uploaded yet. Its viewing and download
                links will be available once you provide the file.
              </p>
            ) : (
              cert.previewUrl && (
                <img
                  src={cert.previewUrl}
                  alt={`${cert.title} certificate issued by ${cert.issuer}`}
                  className="w-full rounded-lg border border-border bg-platinum object-contain"
                />
              )
            )}
            {cert.fileUrl && !cert.pendingUpload && (
              <a
                href={cert.fileUrl}
                download
                className="link-arrow justify-self-start text-sm"
              >
                Download original <Download size={14} />
              </a>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
