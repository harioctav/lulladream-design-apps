/* LullaDream demo catalogue — local demo data only (never talks to the real LullaDream API) */
window.LD_DATA = (function () {
  var IMG = {
    logo: "assets/lulladream-logo.png", mark: "assets/lulladream-mark.png", orb: "assets/dream-orb.png", avatar: "assets/tiger-avatar.png", moon: "assets/moon.png", fairy: "assets/fairy.png", v_wanda: "assets/voice-wanda.png", v_rudy: "assets/voice-rudy.png", v_yasmin: "assets/voice-yasmin.png",
    aladdin: "assets/aladdin.jpg", alibaba: "assets/ali-baba.jpg", anansi: "assets/anansi.jpg", beauty: "assets/beauty-beast.jpg",
    jessica: "assets/jessica.jpg", cinderella: "assets/cinderella.jpg", hansel: "assets/hansel-gretel.jpg"
  };
  var COVERS = ["jessica", "aladdin", "alibaba", "anansi", "beauty", "cinderella", "hansel"];
  var CATS = ["Magic & Transformations", "Bravery & Adventure", "Clever Heroes", "Wisdom & Morality"];
  var COUNTRIES = ["Arabia", "France", "Germany", "Ghana", "Indonesia"];
  var AGES = ["2–3", "4–5", "6–8", "9–12"];

  var CATALOG = [
    { id: "aladdin", t: "Aladdin and the Magic Lamp", c: "Magic & Transformations", m: 4, country: "Arabia", age: "6–8", cover: "aladdin", pop: 98,
      text: [
        "Long ago, in a city of golden domes and busy markets, there lived a kind boy named Aladdin who dreamed of seeing the stars from the very top of the palace.",
        "One evening a stranger asked him to fetch an old lamp from a cave beneath the desert sand. Inside, jewels glittered like fireflies, but Aladdin only picked up the dusty lamp.",
        "When he rubbed it to clean it, a cloud of blue smoke swirled out, and a giant genie bowed low. \"Three wishes,\" the genie rumbled softly, \"whatever your heart desires.\"",
        "Aladdin thought for a long while. He wished for bread for every family in the market, and for the genie to be free. The genie laughed a laugh as warm as summer.",
        "That night, Aladdin climbed to the palace roof with his new friend, and together they counted the stars until his eyes grew heavy. Goodnight, little dreamer."
      ] },
    { id: "alibaba", t: "Ali Baba and the Forty Thieves", c: "Bravery & Adventure", m: 5, country: "Arabia", age: "6–8", cover: "alibaba", pop: 87,
      text: [
        "Ali Baba was a woodcutter who loved the quiet of the forest and the sound of his donkey's bells.",
        "One day he hid behind a rock and watched forty thieves stop at a mountain. \"Open, Sesame!\" their leader called, and the stone rolled aside.",
        "When they rode away, Ali Baba whispered the words himself. Inside was treasure enough for a thousand years — but he took only a little, enough to help his village.",
        "Clever Morgiana, his friend, kept watch when the thieves came looking. With quick thinking and a brave heart, she kept everyone safe.",
        "And so the village shared their good fortune, and every night the forest hummed a calm, sleepy song. Sweet dreams."
      ] },
    { id: "anansi", t: "Anansi the Spider", c: "Clever Heroes", m: 4, country: "Ghana", age: "4–5", cover: "anansi", pop: 76,
      text: [
        "High in a baobab tree lived Anansi, a little spider with a very big idea: he wanted all the stories in the world.",
        "The Sky God kept the stories in a golden box and said, \"Bring me the hornets, the python and the leopard, and the stories are yours.\"",
        "Anansi used gourds of water, a long stick and a clever trap — not strength, but his quick mind.",
        "The Sky God smiled and opened the box. Stories floated out like fireflies, and Anansi shared every one of them with the world.",
        "That is why, when you listen to a story at bedtime, a little bit of Anansi is with you. Goodnight."
      ] },
    { id: "beauty", t: "Beauty and The Beast", c: "Magic & Transformations", m: 6, country: "France", age: "6–8", cover: "beauty", pop: 92,
      text: [
        "In a castle covered with roses lived a lonely Beast who had forgotten how to smile.",
        "Belle came to the castle to keep a promise for her father. At first the halls felt cold, but the books in the library felt like old friends.",
        "Each evening the Beast listened as Belle read aloud. Slowly, his growls became laughs and his footsteps became gentle.",
        "When the last petal of the enchanted rose began to fall, Belle said, \"You are my friend.\" Light filled the castle, and the spell melted away.",
        "Kindness, Belle learned, can see what eyes cannot. Rest now, and dream of rose gardens."
      ] },
    { id: "jessica", t: "Jessica's Brave Adventure", c: "Wisdom & Morality", m: 4, country: "Indonesia", age: "4–5", cover: "jessica", pop: 70,
      text: [
        "Jessica had a red scarf, a small backpack and one big question: what is on the other side of the hill?",
        "On the way she met a tortoise who was stuck in the mud. Jessica stopped, even though she was in a hurry, and helped him out.",
        "At the top of the hill a strong wind blew, and Jessica felt scared. The tortoise said, \"Brave doesn't mean not scared. It means you keep going kindly.\"",
        "On the other side she found a meadow full of glowing flowers that only open for kind hearts.",
        "Jessica picked one to light her way home, and fell asleep with it beside her pillow. Goodnight, brave one."
      ] },
    { id: "cinderella", t: "Cinderella", c: "Magic & Transformations", m: 8, country: "France", age: "6–8", cover: "cinderella", pop: 95,
      text: [
        "Cinderella swept the floors and sang to the mice who lived in the kitchen walls.",
        "When an invitation to the royal ball arrived, she had no gown to wear — until her fairy godmother appeared in a shimmer of silver.",
        "A pumpkin became a coach, the mice became horses, and her old dress turned into starlight.",
        "She danced until the clock struck twelve, then ran so fast that one glass slipper stayed behind on the stairs.",
        "The prince searched the whole kingdom, and the slipper fit only Cinderella. Kindness, it seems, always finds its way home. Sleep tight."
      ] },
    { id: "hansel", t: "Hansel and Gretel", c: "Clever Heroes", m: 5, country: "Germany", age: "6–8", cover: "hansel", pop: 81,
      text: [
        "Hansel and Gretel lived at the edge of a deep, green forest.",
        "One day they wandered too far and followed a trail of sweet smells to a cottage made of gingerbread and candy.",
        "The cottage belonged to a grumpy old witch, but Gretel was clever, and Hansel was brave.",
        "Together they found a way out and followed the white pebbles that shone in the moonlight all the way home.",
        "Their father hugged them tight, and from then on they always explored the forest together. Goodnight, little explorers."
      ] }
  ];

  var STYLES = [["calm", "Calm & Soothing", "🌙"], ["funny", "Funny", "😂"], ["adventurous", "Adventurous", "🗺️"], ["magical", "Magical", "✨"], ["educational", "Educational", "📚"], ["rhyming", "Rhyming", "🎵"]];
  var TYPES = [["fairy", "Fairy Tale", "🧚"], ["fable", "Fable", "🦊"], ["adventure", "Adventure", "🏔️"], ["bedtime", "Bedtime", "🛏️"], ["space", "Space", "🚀"], ["mystery", "Mystery", "🔍"]];
  var DURS = [3, 5, 8, 10];
  var VOICES_BUILTIN = [["wanda", "Wanda"], ["rudy", "Rudy"], ["yasmin", "Yasmin"]];
  var SOUNDS = ["Off", "Rain", "Ocean", "Forest", "Lullaby"];
  var TIMERS = [0, 5, 10, 15, 30];
  var IDEAS = ["A brave fox explores a hidden forest", "A dragon who is afraid of the dark", "A trip to the moon in a paper boat", "A little cloud who wants to be a rainbow"];
  var CAT_FOR_TYPE = { fairy: "Magic & Transformations", fable: "Wisdom & Morality", adventure: "Bravery & Adventure", bedtime: "Wisdom & Morality", space: "Bravery & Adventure", mystery: "Clever Heroes" };

  function genText(d) {
    var n = d.name || "Little one", a = (d.about || "a wonderful journey").replace(/\.$/, "");
    var place = d.setting || ({ space: "a silver rocket above the clouds", adventure: "the hills beyond the village", mystery: "an old lighthouse by the sea", fable: "a forest where animals could talk", fairy: "a kingdom of glowing flowers", bedtime: "a cozy little house" })[d.type] || "a cozy little village";
    var open = ({ funny: "Once upon a very silly time", rhyming: "In a land where the moonbeams hum and the soft winds play", calm: "Once upon a quiet evening", adventurous: "Once upon a daring morning", magical: "Once upon a sparkling night", educational: "Once upon a curious afternoon" })[d.style] || "Once upon a time";
    var p = [
      open + ", in " + place + ", there lived " + n + ", who was " + d.age + " years old and full of wonder.",
      "This is the story of " + a.charAt(0).toLowerCase() + a.slice(1) + ".",
      ({ funny: n + " giggled so hard at a hiccuping owl that the stars giggled too.", rhyming: n + " walked on and sang a little tune, \"Hello to the sky and hello to the moon.\"", calm: n + " took a slow, deep breath, and the night air felt soft as a blanket.", adventurous: n + " tightened a backpack, looked at the map, and took the very first brave step.", magical: "A ribbon of light curled around " + n + "'s fingers and whispered a secret.", educational: n + " counted the stars one by one and learned that each one is a faraway sun." })[d.style] || n + " set off with a smile.",
      "Along the way, " + n + " made a new friend, and together they discovered that sharing makes every adventure brighter.",
      d.moral ? "And " + n + " remembered something important: " + d.moral.replace(/\.$/, "") + "." : n + " learned that being kind is the bravest thing of all.",
      "When the moon rose high, " + n + " came home, snuggled into bed and drifted into the sweetest dreams. Goodnight, " + n + "."
    ];
    return p;
  }

  return { IMG: IMG, COVERS: COVERS, CATS: CATS, COUNTRIES: COUNTRIES, AGES: AGES, CATALOG: CATALOG, STYLES: STYLES, TYPES: TYPES, DURS: DURS,
    VOICES_BUILTIN: VOICES_BUILTIN, SOUNDS: SOUNDS, TIMERS: TIMERS, IDEAS: IDEAS, CAT_FOR_TYPE: CAT_FOR_TYPE, genText: genText };
})();
