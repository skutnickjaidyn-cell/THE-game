window.GAME_DATA = {
  title: "Clashline: Legends",
  tagline: "2D Pixel Combat Prototype",
  fighters: [
    {
      id: "cole_deadeye_mercer",
      name: "Cole \u201cDeadeye\u201d Mercer",
      archetype: "Wild West Gunslinger",
      color: "#f59e0b",
      moves: {
        jab: "Two fast punches, then a pistol-whip.",
        special1: "Quick revolver round forward.",
        special2: "Short-arc dynamite toss that launches.",
        special3: "Forward kick with snake-boot knockback.",
        low: "Crouching low revolver shot.",
        high: "Overhead lasso spin.",
        aerial: "Airborne revolver kick-off.",
        super: "Fan-the-hammer barrage after a screen darken."
      },
      intro: "Adjusts bandanna, tips hat down, then quick-draws into the air.",
      victory: "Spins both revolvers, holsters instantly, then tips hat."
    },
    {
      id: "bjorn_skullsplitter",
      name: "Bjorn Skullsplitter",
      archetype: "Viking Berserker",
      color: "#ef4444",
      moves: {
        jab: "Axe-handle strike x2 into short chop.",
        special1: "Shoulder charge knockback.",
        special2: "Heavy overhead axe swing (slow startup).",
        special3: "Battle roar shockwave.",
        low: "Low sweeping axe swing.",
        high: "Rising axe arc anti-air.",
        aerial: "Jumping downward axe cleave.",
        super: "Berserk flurry into launching spinning strike."
      },
      intro: "Drags axe in with sparks.",
      victory: "Plants axe and raises drinking horn while laughing."
    },
    {
      id: "kaizen_16",
      name: "Kaizen-16",
      archetype: "Cyberpunk Samurai",
      color: "#38bdf8",
      moves: {
        jab: "Two fast slashes into energy thrust.",
        special1: "Neon blur dash-cut.",
        special2: "Holographic duplicate slash.",
        special3: "Counter stance into instant katana punish.",
        low: "Low sliding katana sweep.",
        high: "Upward energy slash.",
        aerial: "Aerial cross slash.",
        super: "Time-slow teleport slashes into massive finisher."
      },
      intro: "Materializes via digital distortion in samurai kneel.",
      victory: "Performs a blinding slash and sheaths with a mechanical click."
    },
    {
      id: "captain_isabella_drake",
      name: "Captain Isabella Drake",
      archetype: "Pirate Captain",
      color: "#f97316",
      moves: {
        jab: "Cutlass slash x2 into mechanical hook jab.",
        special1: "Chain hook pull-in.",
        special2: "Exploding flintlock shot.",
        special3: "Spinning multi-hit cutlass slash.",
        low: "Low sweeping kick.",
        high: "Upward hook anti-air.",
        aerial: "Aerial cutlass spin.",
        super: "Hook lockdown into pirate ship cannon broadside."
      },
      intro: "Swings in on rope and retracts grappling claw.",
      victory: "Opens treasure chest and lets coins spill through fingers."
    },
    {
      id: "thok",
      name: "Thok",
      archetype: "Caveman",
      color: "#84cc16",
      moves: {
        jab: "Punch x2 into short club bash.",
        special1: "Arcing heavy rock throw.",
        special2: "Club ground slam shockwave.",
        special3: "Savage lunge bite stagger.",
        low: "Low club sweep.",
        high: "Heavy vertical club strike.",
        aerial: "Jumping two-hand club smash.",
        super: "Calls T-Rex ally combo into tail slam launch."
      },
      intro: "Chest pounds, roar, and earth-cracking club smash.",
      victory: "Triumphant roar, then gnaws on giant dinosaur bone."
    },
    {
      id: "reginald_hawthorne",
      name: "Reginald Hawthorne",
      archetype: "British Redcoat",
      color: "#dc2626",
      moves: {
        jab: "Musket butt x2 into bayonet stab.",
        special1: "Spinning bayonet thrust.",
        special2: "Gunpowder pouch shot explosion.",
        special3: "Deploys cannonball shot.",
        low: "Swift low kick.",
        high: "High musket butt flick.",
        aerial: "Bayonet dive stab.",
        super: "Military strike flurry into charged musket volley."
      },
      intro: "Marches in, taps musket, performs formal salute.",
      victory: "Brushes coat, plants musket, and gives crisp salute."
    },
    {
      id: "morvath",
      name: "Morvath",
      archetype: "Necromancer",
      color: "#22c55e",
      moves: {
        jab: "Staff swing x2 into green magic poke.",
        special1: "Summons tackling skeleton.",
        special2: "Slow necrotic orb explosion.",
        special3: "Ghostly hand slap.",
        low: "Ground staff sweep.",
        high: "Spectral skull anti-air.",
        aerial: "Midair cursed burst.",
        super: "Skeleton swarm into giant green staff detonation."
      },
      intro: "Rises from rattling bones and mist.",
      victory: "Raises staff and summons kneeling skeletal warriors."
    },
    {
      id: "whisper",
      name: "Whisper",
      archetype: "Forest Fairy",
      color: "#a855f7",
      moves: {
        jab: "Wand tap x2 into petal burst.",
        special1: "Vine whip pull.",
        special2: "Pollen cloud zone.",
        special3: "Forward float spin strike.",
        low: "Ground vine trip.",
        high: "Wing sweep anti-air.",
        aerial: "Fluttering aerial wand burst.",
        super: "Summons giant vines and fairy energy launch."
      },
      intro: "Glowing orb blossoms into fairy form.",
      victory: "Sprinkles dust as colorful flowers grow around her."
    },
    {
      id: "professor_locke",
      name: "Professor Locke",
      archetype: "Steampunk Engineer",
      color: "#facc15",
      moves: {
        jab: "Three punches into wrench strike.",
        special1: "Piston-like extend-arm punch.",
        special2: "Forward flying drone.",
        special3: "Spring-boot leap spin kick.",
        low: "Mechanical arm sweep.",
        high: "Vertical wrench strike.",
        aerial: "Clockwork dropkick.",
        super: "Deploys steam mech stomp and gear-shockwave."
      },
      intro: "Adjusts gear pack, drops goggles, cycles mechanical arm.",
      victory: "Deploys a tiny clockwork automaton."
    },
    {
      id: "el_maton",
      name: "El Mat\u00f3n",
      archetype: "Lucha Libre Gorilla",
      color: "#ec4899",
      moves: {
        jab: "Rapid punch x2 into heavy uppercut.",
        special1: "Charging clothesline.",
        special2: "Leaping body slam.",
        special3: "Spinning arm cyclone.",
        low: "Ground arm sweep.",
        high: "Cape flourish anti-air.",
        aerial: "Flying elbow drop.",
        super: "Ring leap spin slam into finishing suplex."
      },
      intro: "Bursts in, climbs ropes, and hypes crowd.",
      victory: "Straps on giant championship belt and chest pounds."
    },
    {
      id: "officer_mike_donovan",
      name: "Officer Mike Donovan",
      archetype: "Police Officer",
      color: "#3b82f6",
      moves: {
        jab: "Baton x2 into gloved punch.",
        special1: "Short-range taser stun.",
        special2: "Riot shield shove.",
        special3: "Flashbang stun throw.",
        low: "Crouching boot sweep.",
        high: "Overhead baton strike.",
        aerial: "Aerial riot-knee strike.",
        super: "Calls squad car and rams across stage."
      },
      intro: "Police lights sweep in as he adjusts vest.",
      victory: "Spins and snaps handcuffs with confidence."
    },
    {
      id: "prince_lucien",
      name: "Prince Lucien",
      archetype: "Fencing Prince",
      color: "#fb7185",
      moves: {
        jab: "Rapier thrust x2 into flourish stab.",
        special1: "Forward piercing dash thrust.",
        special2: "Elegant horizontal rapier twirl.",
        special3: "Rapid lattice thrust sequence.",
        low: "Quick rapier sweep trip.",
        high: "Upward anti-air thrust.",
        aerial: "Aerial crescent rapier slash.",
        super: "Choreographed royal combo into energy slash finisher."
      },
      intro: "Strolls in, adjusts feather, draws rapier.",
      victory: "Refined bow and rapier sparkle."
    },
    {
      id: "antonio_rossi",
      name: "Antonio Rossi",
      archetype: "Chef Brawler",
      color: "#f97316",
      moves: {
        jab: "Punch x2 into overhead skillet swing.",
        special1: "Flaming skillet arc.",
        special2: "Exploding vegetable tray toss.",
        special3: "TBD signature chef rush.",
        low: "Low butcher-knife sweep.",
        high: "Overhead pot slam.",
        aerial: "Midair pan flip strike.",
        super: "Stage-wide flame pillars and boiling stew finisher."
      },
      intro: "Flips ingredients in skillet without looking.",
      victory: "Plates dish with a stylish final pan toss."
    },
    {
      id: "iztli",
      name: "Iztli",
      archetype: "Aztec Warrior",
      color: "#14b8a6",
      moves: {
        jab: "Obsidian slash x3 into rising strike.",
        special1: "Straight spear throw.",
        special2: "Low lunging pounce.",
        special3: "Spiritual glowing horizontal slash.",
        low: "Crouching obsidian sweep.",
        high: "Upward clawed anti-air swipe.",
        aerial: "Aerial jaguar pounce slash.",
        super: "Jaguar spirit transform multi-pounce finisher."
      },
      intro: "Ceremonial spin and dust-swirling ground slap.",
      victory: "Plants club as spirit jaguar prowls behind him."
    },
    {
      id: "monolith",
      name: "Monolith",
      archetype: "Volcano Golem",
      color: "#ea580c",
      moves: {
        jab: "Stone punch x2 into heavy smash.",
        special1: "Lava-charged straight punch.",
        special2: "Ground pound vertical lava burst.",
        special3: "Persistent lava puddle spit.",
        low: "Ground-level rock fist drag.",
        high: "Overhead boulder slam.",
        aerial: "Meteor body drop.",
        super: "Stage cracks with geysers, boulder rain, magma eruption."
      },
      intro: "Rises from magma fissure with molten sparks.",
      victory: "Creates lava eruption and lifts arm amid embers."
    },
    {
      id: "lowfreq_lloyd",
      name: "LowFreq Lloyd",
      archetype: "DJ",
      color: "#8b5cf6",
      moves: {
        jab: "Punch x2 into sonic flick.",
        special1: "Bass shockwave push.",
        special2: "Ricochet vinyl throw.",
        special3: "Hand strike plus record spin pulse.",
        low: "Low trip sweep.",
        high: "Overhead turntable swing.",
        aerial: "Midair bass drop kick.",
        super: "Arena-wide neon basswave sequence."
      },
      intro: "Enters with turntable rig and neon sound burst.",
      victory: "Spins glowing record overhead to flashing lights."
    },
    {
      id: "vulture",
      name: "Vulture",
      archetype: "Super Spy",
      color: "#64748b",
      moves: {
        jab: "Precision punch x2 into knife flick.",
        special1: "Smoke vanish into behind-strike.",
        special2: "Slow-effect tech dart.",
        special3: "Forward dive kick.",
        low: "Crouching trip kick.",
        high: "Swift overhead elbow.",
        aerial: "Aerial gadget knee strike.",
        super: "Drone missiles plus cinematic grapple throw."
      },
      intro: "Drops on grappling line and activates wrist gadget.",
      victory: "Stows line and smirks beneath hovering drone."
    },
    {
      id: "remarkable_man",
      name: "Remarkable Man",
      archetype: "Overconfident Superhero",
      color: "#ef4444",
      moves: {
        jab: "Heroic punches x2 into uppercut.",
        special1: "Cape sweep arc.",
        special2: "Flying straight punch.",
        special3: "Mid-range eye laser.",
        low: "Classic low superhero sweep.",
        high: "Dramatic overhead smash.",
        aerial: "Heroic flying knee.",
        super: "Sky dive into explosive super-strength impact."
      },
      intro: "Descends in dramatic landing with cape flare.",
      victory: "Air spin, heroic landing, and raised fist pose."
    },
    {
      id: "long_shen",
      name: "Long Shen",
      archetype: "Dragon Kung Fu Master",
      color: "#f59e0b",
      moves: {
        jab: "Rapid chi strikes into finishing punch.",
        special1: "Short-range golden chi blast.",
        special2: "Chi-charged palm push.",
        special3: "Chi-infused bicycle kick.",
        low: "Low spinning dragon-tail kick.",
        high: "Vertical chi palm strike.",
        aerial: "Aerial dragon wheel kick.",
        super: "Spectral chi dragon combo into breath finisher."
      },
      intro: "Performs kata with spectral dragon chi trails.",
      victory: "Bows calmly beneath hovering spectral dragon."
    },
    {
      id: "harold",
      name: "Harold",
      archetype: "Disgruntled Office Worker",
      color: "#94a3b8",
      moves: {
        jab: "Tired punches x2 into lazy shove.",
        special1: "Stapler rapid-fire.",
        special2: "Scalding coffee puddle trap.",
        special3: "Rolling office chair kick.",
        low: "Paper stack drop hit.",
        high: "Overhead briefcase swing.",
        aerial: "Aerial desperation kick.",
        super: "Rage combo into filing cabinet crush."
      },
      intro: "Stumbles in yawning and drops papers.",
      victory: "Sits on briefcase and tosses papers in frustration."
    },
    {
      id: "jack_marlowe",
      name: "Jack Marlowe",
      archetype: "1920s Private Investigator",
      color: "#71717a",
      moves: {
        jab: "Punch x2 into elbow strike.",
        special1: "Camera flash stun.",
        special2: "Diagonal tommy-gun burst.",
        special3: "Damaging cigar smoke cloud.",
        low: "Street-fight sweep kick.",
        high: "Coat-flare uppercut.",
        aerial: "Aerial noir heel strike.",
        super: "Film-noir combo and magnifying-glass knockout."
      },
      intro: "Film-reel flicker, cigar light, and notebook scribble.",
      victory: "Crushes cigar, tips hat, flips trenchcoat."
    },
    {
      id: "razorjaw",
      name: "Razorjaw",
      archetype: "Cybernetically Enhanced Shark",
      color: "#0ea5e9",
      moves: {
        jab: "Three rapid shark bites.",
        special1: "Lunging mechanical claw-kick barrage.",
        special2: "Harpoon spear throw.",
        special3: "Metal-leg slam wave push.",
        low: "Tail sweep.",
        high: "Massive overhead bite.",
        aerial: "Jet-thruster aerial bite dive.",
        super: "Ocean drag cinematic with cyber-shark swarm."
      },
      intro: "Bursts from water as metal legs extend with sparks.",
      victory: "Ground pound tremor and roaring shark pose."
    }
  ],
  stages: [
    "Dustwind Gulch",
    "Frostkeep Peak",
    "Neon Shogun District",
    "Crimson Tide Cove",
    "Big Rock Place",
    "Fort Kingsley",
    "The Crypt",
    "Glittering Glade",
    "Locke's Workshop",
    "Arena De Los Colosos",
    "Inner-City Precinct",
    "Royal Grand Hall",
    "La Cucina Di Rossi",
    "Aztec Sun Temple",
    "Molten Bastion",
    "Plaza",
    "Midnight Espionage",
    "Sentinel Skyline",
    "Celestial Dragon Monastery",
    "GODAMN CUBICLE!",
    "Rainy Alley",
    "Dockyards",
    "Training Room",
    "Random"
  ]
};
