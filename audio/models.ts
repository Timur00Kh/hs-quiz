export type TDistance =
  | "1000m"
  | "500m"
  | "350m"
  | "200m"
  | "100m"
  | "50m"
  | "20m"
  | "5m"
  | "0m";

export type TAmmoType = "Compact" | "Special" | "Long" | "Medium";

export type TWeaponSoundInfo = { distance: TDistance; file: string };

export type TWeapon = {
  name: string;
  ammo: TAmmoType;
  sounds_info: TWeaponSoundInfo[];
};
