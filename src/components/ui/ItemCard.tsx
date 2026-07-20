import Link from "next/link";
import { MapPin, Layers } from "lucide-react";

export type ItemCardMeta = {
  icon?: React.ReactNode;
  label: string;
};

type Props = {
  imageUrl?: string;
  title: string;
  description: string;
  meta: ItemCardMeta[];
  badge?: string;
  href: string;
};

/**
 * Reusable listing card.
 * Used by both the public Explore page (wells + core samples) so every
 * card in the app shares the same height, radius, and layout.
 */
export default function ItemCard({
  imageUrl,
  title,
  description,
  meta,
  badge,
  href,
}: Props) {
  return (
    <div className="card h-[420px] w-full bg-base-100 border border-base-300 rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <figure className="h-44 w-full shrink-0 bg-base-200">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-base-content/40">
            <Layers size={40} />
          </div>
        )}
      </figure>

      <div className="card-body flex-1 flex flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg line-clamp-1">
            {title}
          </h3>

          {badge && (
            <span className="badge badge-primary badge-outline shrink-0">
              {badge}
            </span>
          )}
        </div>

        <p className="text-sm text-base-content/70 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto space-y-1 pt-2">
          {meta.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-base-content/60"
            >
              {item.icon ?? <MapPin size={14} />}
              <span className="line-clamp-1">{item.label}</span>
            </div>
          ))}

          <Link
            href={href}
            className="btn btn-primary btn-sm w-full mt-3"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
