import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface AuthCardProps {
  childrenCardHeader: React.ReactNode;
  childrenCardContent: React.ReactNode;
}

export default function AuthCard({
  childrenCardHeader,
  childrenCardContent,
}: AuthCardProps) {
  return (
    <Card className="max-w-sm">
      <CardHeader>{childrenCardHeader}</CardHeader>
      <CardContent>{childrenCardContent}</CardContent>
    </Card>
  );
}
