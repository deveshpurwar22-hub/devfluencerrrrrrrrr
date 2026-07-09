import { Card, CardContent } from "./card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <Card className="w-full max-w-md border border-zinc-800 bg-zinc-900">
        <CardContent className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">404</h1>
          <p className="text-zinc-400">
            The page you are looking for does not exist.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
