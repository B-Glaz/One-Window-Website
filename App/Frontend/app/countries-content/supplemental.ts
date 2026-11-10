import type { CountryProfile } from "./types";
import { singapore } from "./singapore";
import { dubai } from "./dubai";
import { newZealand } from "./new-zealand";
import { spain } from "./spain";
import { switzerland } from "./switzerland";
import { hongKong } from "./hong-kong";
import { sweden } from "./sweden";

export const supplementalProfiles: Record<string, CountryProfile> = {
  singapore,
  dubai,
  "new-zealand": newZealand,
  spain,
  switzerland,
  "hong-kong": hongKong,
  sweden,
};
