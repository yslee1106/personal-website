import { basePath } from "./basePath";

export default function imageLoader({ src }: { src: string }) {
  return `${basePath}${src}`;
}
