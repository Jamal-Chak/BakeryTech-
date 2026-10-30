import type { DivisionSlug } from "@/lib/divisions";
import type { ReactElement } from "react";

type EquipmentIllustrationProps = {
  division: DivisionSlug;
  className?: string;
};

const DIVISION_LABELS: Record<DivisionSlug, string> = {
  bakery: "Bakery division — industrial oven illustration",
  butchery: "Butchery division — bandsaw illustration",
  services: "Workshop services — spanner and gear illustration",
};

function BakeryGraphic() {
  return (
    <g>
      <rect x="54" y="86" width="92" height="44" rx="6" />
      <path d="M58 114 H138" />
      <circle cx="132" cy="114" r="3" />
      <path d="M62 96 L130 96" />
      <path d="M40 84 Q34 84 34 90 L34 104 L52 104 L52 90 Q52 84 46 84 Z" />
      <path d="M44 88 Q48 84 52 88" />
    </g>
  );
}

function ButcheryGraphic() {
  return (
    <g>
      <circle cx="72" cy="56" r="18" />
      <circle cx="72" cy="106" r="18" />
      <path d="M54 56 Q72 42 90 56" />
      <path d="M54 106 Q72 120 90 106" />
      <path d="M96 106 H144" />
      <rect x="100" y="112" width="36" height="14" rx="2" />
    </g>
  );
}

function ServicesGraphic() {
  return (
    <g>
      <circle cx="64" cy="84" r="20" />
      <circle cx="64" cy="84" r="9" />
      <path d="M112 78 L142 48" />
      <circle cx="148" cy="42" r="10" />
      <circle cx="148" cy="42" r="4" />
    </g>
  );
}

const DIVISION_GRAPHICS: Record<DivisionSlug, ReactElement> = {
  bakery: <BakeryGraphic />,
  butchery: <ButcheryGraphic />,
  services: <ServicesGraphic />,
};

export default function EquipmentIllustration({
  division,
  className,
}: EquipmentIllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 140"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      aria-label={DIVISION_LABELS[division]}
    >
      <title>{DIVISION_LABELS[division]}</title>
      {DIVISION_GRAPHICS[division]}
    </svg>
  );
}
