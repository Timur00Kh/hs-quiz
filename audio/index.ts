import type { TWeapon, TWeaponSoundInfo } from "./models.ts";

const sounds_info = [
  { distance: "1000m", file: "01" },
  { distance: "500m", file: "02" },
  { distance: "350m", file: "03" },
  { distance: "200m", file: "04" },
  { distance: "100m", file: "05" },
  { distance: "50m", file: "06" },
  { distance: "20m", file: "07" },
  { distance: "5m", file: "08" },
  { distance: "0m", file: "09" },
];

const sounds_info_silencer = [
  { distance: "50m", file: "01" },
  { distance: "20m", file: "02" },
  { distance: "5m", file: "03" },
  { distance: "0m", file: "04" },
];

const weapons = [
  {
    name: "Bornheim No. 3",
    ammo: "Compact",
    sounds_info: sounds_info,
  },
  {
    name: "Bow",
    ammo: "Special",
    sounds_info: sounds_info_silencer,
  },
  {
    name: "Caldwell Conversion Pistol",
    ammo: "Compact",
    sounds_info: sounds_info,
  },
  {
    name: "Caldwell Conversion Uppercut",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "Sparks Pistol",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "Caldwell Pax",
    ammo: "Medium",
    sounds_info: sounds_info,
  },
  {
    name: "Caldwell Rival 78",
    ammo: "Shotgun",
    sounds_info: sounds_info,
  },
  {
    name: "Crossbow",
    ammo: "Special",
    sounds_info: sounds_info_silencer,
  },
  {
    name: "Crown & King Auto-5",
    ammo: "Shotgun",
    sounds_info: sounds_info,
  },
  {
    name: "Dolch 96",
    ammo: "Special",
    sounds_info: sounds_info,
  },
  {
    name: "Lebel 1886",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "LeMat Mark II",
    ammo: "Compact",
    sounds_info: sounds_info,
  },
  {
    name: "Martini-Henry IC1",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "Mosin-Nagant M1891 Avtomat",
    ammo: "Long",
    sounds_info: sounds_info,
  },

  {
    name: "Mosin-Nagant M1891",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "Nagant M1895 Officer",
    ammo: "Compact",
    sounds_info: sounds_info,
  },
  {
    name: "Nagant M1895 Silencer",
    ammo: "Compact",
    sounds_info: sounds_info_silencer,
  },
  /*
    {
        'name' : 'Nagant M1895',
        'ammo' : 'Compact',
        'sounds_info' : sounds_info
    },
    */
  {
    name: "Nitro Express Rifle",
    ammo: "Special",
    sounds_info: sounds_info,
  },
  {
    name: "Romero 77",
    ammo: "Shotgun",
    sounds_info: sounds_info,
  },
  {
    name: "Sparks LRR Silencer",
    ammo: "Long",
    sounds_info: sounds_info_silencer,
  },
  {
    name: "Sparks LRR",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "Specter 1882",
    ammo: "Shotgun",
    sounds_info: sounds_info,
  },
  {
    name: "Springfield 1866",
    ammo: "Medium",
    sounds_info: sounds_info,
  },
  {
    name: "Vetterli 71 Karabiner",
    ammo: "Medium",
    sounds_info: sounds_info,
  },
  {
    name: "Winfield 1887 Terminus",
    ammo: "Shotgun",
    sounds_info: sounds_info,
  },
  {
    name: "Winfield M1873C Silencer",
    ammo: "Compact",
    sounds_info: sounds_info_silencer,
  },
  {
    name: "Winfield M1873C",
    ammo: "Compact",
    sounds_info: sounds_info,
  },
  {
    name: "Winfield M1876 Centennial",
    ammo: "Medium",
    sounds_info: sounds_info,
  },
  {
    name: "Flare Pistol",
    ammo: "Special",
    sounds_info: [
      { distance: "150m", file: "01" },
      { distance: "100m", file: "02" },
      { distance: "50m", file: "03" },
      { distance: "20m", file: "04" },
      { distance: "5m", file: "05" },
      { distance: "0m", file: "06" },
    ],
  },
  {
    name: "Quad Derringer",
    ammo: "Special",
    sounds_info: [
      { distance: "450m", file: "01" },
      { distance: "400m", file: "02" },
      { distance: "350m", file: "03" },
      { distance: "200m", file: "04" },
      { distance: "100m", file: "05" },
      { distance: "50m", file: "06" },
      { distance: "20m", file: "07" },
      { distance: "5m", file: "08" },
      { distance: "0m", file: "09" },
    ],
  },
  {
    name: "Scottfied Model 3",
    ammo: "Medium",
    sounds_info: sounds_info,
  },
  {
    name: "Vetterli 71 Karabiner Silencer",
    ammo: "Medium",
    sounds_info: sounds_info_silencer,
  },
  {
    name: "Berthier Mle 1892",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "Windfield 1893 Slate",
    ammo: "Shotgun",
    sounds_info: sounds_info,
  },
  {
    name: "Caldwell 92 New army",
    ammo: "Compact",
    sounds_info: sounds_info,
  },
  {
    name: "Springfield M1892 Krag",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "Drilling",
    ammo: "Medium",
    sounds_info: sounds_info,
  },
  {
    name: "Vetterli 71 Karabiner Cyclone",
    ammo: "Medium",
    sounds_info: sounds_info,
  },
  {
    name: "LeMat Mark II UpperMat",
    ammo: "Long",
    sounds_info: sounds_info,
  },
  {
    name: "Caldwell Pax Trueshot",
    ammo: "Medium",
    sounds_info: sounds_info,
  },
  {
    name: "Caldwell Marathon",
    ammo: "Compact",
    sounds_info: sounds_info,
  },
  {
    name: "Bornheim n°3 Silencer",
    ammo: "Compact",
    sounds_info: sounds_info_silencer,
  },
  {
    name: "Winfield M1876 Centennial Shorty Silencer",
    ammo: "Medium",
    sounds_info: sounds_info_silencer,
  },
];

const json: TWeapon[] = weapons.map(
  (weapon) =>
    ({
      ammo: weapon.ammo,
      name: weapon.name,
      sounds_info: weapon.sounds_info.map(
        (info) =>
          ({
            distance: info.distance,
            file: `${weapon.name}-${info.file}.mp3`,
          }) as TWeaponSoundInfo,
      ),
    }) as TWeapon,
);

console.log(`Generating: weapons.json`);
await Bun.write("./assets/weapons.json", JSON.stringify(json, null, 2));

await Bun.sleep(2000);

for (const weapon of weapons) {
  for (const info of weapon.sounds_info) {
    console.log(`Dowdloading: ${weapon.name}: ${info.distance}`);
    const file = await fetch(
      `https://hunt.kamille.ovh/audio/${weapon.name}-${info.file}.mp3`,
    );
    await Bun.write(`./assets/${weapon.name}-${info.file}.mp3`, file);
  }
}
