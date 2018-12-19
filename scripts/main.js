const champions = [
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Aatrox.png?image=w_140&v=15354684000",
		name: "Aatrox",
		id: "1",
		position: "Top, Middle, Jungle",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143554",
		modalTitleMoniker: "The Darkin Blade",
		quote: "\"I must destroy even hope…\"",
		biography: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c0/Deathbringer_Stance.png/revision/latest?cb=20180612213546",
		passiveTitle: "Deathbringer Stance",
		passiveDescription: "INNATE: Aatrox's next basic attack gains 50 bonus range and deals 8% − 16% (based on level) of the target's maximum health as bonus physical damage on-hit, capped at 400 against monsters. Enemy champions are also Mutilated for 3 seconds.<br>Deathbringer Stance's cooldown is reduced by 2 seconds when Aatrox casts an ability or hits a champion with the edge of The Darkin Blade.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/34/The_Darkin_Blade.png/revision/latest?cb=20180612213631",
		abilityQTitle: "The Darkin Blade",
		abilityQDescription: "ACTIVE: Aatrox swings his greatsword in the target direction, striking enemies in a line. The Darkin Blade can then be reactivated twice within 4 seconds, with the second cast refreshing the timer. The second cast strikes enemies in a cone and the third in the target area.<br>Each cast deals physical damage, with minions taking 50% − 0% (based on level) reduced damage. All units take 25% increased damage on the second cast and 50% on the third.<br>Hitting enemies at the far end of the first two casts and the center of the third deals 50% bonus damage and knocks up enemies for 0.25 seconds, doubled to 0.5 seconds against monsters.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/63/Infernal_Chains.png/revision/latest?cb=20180612213332",
		abilityWTitle: "Infernal Chains",
		abilityWDescription: "ACTIVE: Aatrox smashes the ground in the target direction, creating a chain that stops on the first enemy hit, dealing physical damage, doubled against minions, and slowing them for 1.5 seconds.<br>If Infernal Chains hits a champion or large monster, they are chained to the impact area. If the chained enemy is still in the impact area after 1.5 seconds, they are dragged to the center and take the same damage again.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0a/Umbral_Dash.png/revision/latest?cb=20180612213709",
		abilityETitle: "Umbral Dash",
		abilityEDescription: "PASSIVE: Aatrox heals for a percentage of the post-mitigation-physical damage he deals, with a 15% effectiveness against non-champions.<br>Additionally, Aatrox periodically stores a Umbral Dash charge, up to 2 stored at once.<br>ACTIVE: Aatrox dashes in the target direction, gaining bonus attack damage for 1.5 seconds.<br>Umbral Dash resets Aatrox's basic attack timer and can be cast during his other spell casts without interruption.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/de/World_Ender.png/revision/latest?cb=20180612213606",
		abilityRTitle: "World Ender",
		abilityRDescription: "ACTIVE: After 0.5 seconds, Aatrox unleashes his true demonic form for 10 seconds, fearing nearby allied and enemy minions for 3 seconds, and for the first second gaining bonus movement speed.<br>While transformed Aatrox gains increased size and bonus attack damage, refreshing the bonus movement speed when out-of-combat with champions and turrets.<br>Aatrox generates Blood Well equal to 15% − 50% (based on duration) of his maximum health over the duration. Taking lethal damage during World Ender revives Aatrox over 3.25 seconds, during which he is untargetable, pacified and slowed by 25% and consumes the Blood Well to recover the same amount in health. While reviving, The Darkin Blade's recast timer is locked."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Akali.png?image=w_140&v=15354684000",
		name: "Akali",
		id: "2",
		position: "Middle, Top",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143556",
		modalTitleMoniker:  "The Rogue Assassin",
		quote: "\"If you look dangerous, you better be dangerous.\"",
		biography: "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a1/Assassin%27s_Mark.png/revision/latest?cb=20180718214107",
		passiveTitle: "Assassin's Mark",
		passiveDescription: "INNATE: Akali's ability damage against enemy champions creates a 500-unit ring around them for 5 seconds, granting her 35 / 40 / 45 / 50% bonus movement speed for 1 / 2 / 3 seconds while moving towards the edge of the ring. When Akali is outside the ring, she regains the bonus movement speed towards enemy champions and gains SWINGING KAMA for 4 seconds. SWINGING KAMA: Akali's next basic attack gains 125 bonus range, deals 39 − 180 (based on level) (+ 90% bonus AD) (+ 70% AP) bonus magic damage and restores 10 / 20 / 30 energy.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b2/Five_Point_Strike.png/revision/latest?cb=20180718213255",
		abilityQTitle: "Five Point Strike",
		abilityQDescription: "ACTIVE: Akali throws a flurry of kunais in the target direction, dealing magic damage to enemies hit. Enemies hit at maximum range are also slowed by 50% for 0.5 seconds. While at 180 energy or above, hitting at least one enemy causes Akali to heal for a percentage of Five Point Strike's premitigation damage. At rank 5, deals 33.3% bonus damage to minions and monsters.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/21/Twilight_Shroud.png/revision/latest?cb=20180718213404",
		abilityWTitle: "Twilight Shroud",
		abilityWDescription: "ACTIVE: Akali restores energy and detonates a smoke bomb in the target direction, creating a circular shroud that expands over the next 5 seconds into a ring. The shroud does not permeate terrain. Entering the shroud renders Akali invisible, gaining bonus movement speed and causing all sources of true sight (including turrets) to grant obscured vision instead. Akali's basic attacks and abilities will break the invisibility for 0.65 seconds. Twilight Shroud's duration is extended by 0.5 seconds whenever she enters or breaks from the shroud, up to 4 times, for a maximum bonus duration of 2 seconds. The marked section of Twilight Shroud's will linger for the mark's duration, even after the shroud ends.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/48/Shuriken_Flip.png/revision/latest?cb=20180718213349",
		abilityETitle: "Shuriken Flip",
		abilityEDescription: "FIRST ACTIVE: Akali flips backward and fires a shuriken forward, stopping with the first enemy hit and dealing physical damage. The shuriken marks the enemy or the last smoke section hit for 3 seconds. While the target is marked, Akali can reactivate Shuriken Flip.<br> SECOND ACTIVE: Akali dashes towards the marked target, regardless of distance. Against enemies deals the same physical damage.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bb/Perfect_Execution.png/revision/latest?cb=20180718213312",
		abilityRTitle: "Perfect Execution",
		abilityRDescription: "FIRST ACTIVE: Akali dashes in the target direction, dealing physical damage and stunning enemies hit for 0.5 seconds. After 2.5 seconds, Perfect Execution can be reactivated within the following 7.5 seconds.<br> SECOND ACTIVE: Akali dashes in the target direction, dealing magic damage to enemies hit, increasing by 0% − 200% (based on target's missing health)."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Darius.png?image=w_140&v=15354684000",
		name: "Darius",
		id: "3",
		position: "Top",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143554",
		modalTitleMoniker: "The Hand Of Noxus",
		quote: "\"A united Noxus could control the world - and would deserve to.\"",
		biography: "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened leader. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the commander of the Trifarian Legion can expect no mercy.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8b/Hemorrhage_2.png/revision/latest?cb=20180126104157",
		passiveTitle: "Hemorrhage",
		passiveDescription: "INNATE: Darius' basic attacks and damaging abilities that strike with his blade cause enemies to bleed for 5 seconds, dealing 13 − 30 (based on level) (+ 30% bonus AD) physical damage over the duration. The bleeding will trigger every 1.25 seconds, and can stack up to 5 times, for a maximum of 65 − 150 (based on level) (+ 150% bonus AD) physical damage over the duration.<br>Upon applying full Hemorrhage stacks to an enemy champion or killing one with Noxian Guillotine, Darius gains Noxian Might for 5 seconds.<br>NOXIAN MIGHT: Darius gains 30 − 230 (based on level) bonus attack damage and instantly applies full Hemorrhage stacks through his usual means.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/04/Decimate.png/revision/latest?cb=20170818002434",
		abilityQTitle: "Decimate",
		abilityQDescription: "ACTIVE: Darius hefts his axe for 0.75 seconds, then swings it around himself, dealing physical damage to nearby enemies, reduced to 35% against enemies hit by the shaft.<br>Darius heals for 12% − 36% (based on enemy champions hit by the blade) missing health. The shaft of Darius' axe will not apply hemorrhage or heal him.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a4/Crippling_Strike.png/revision/latest?cb=20180725194228",
		abilityWTitle: "Crippling Strike",
		abilityWDescription: "ACTIVE: Darius' next basic attack within 4 seconds gains 25 bonus range, deals bonus physical damage and slows the target by 90% for 1 second.<br>If Crippling Strike kills its target it refunds its mana cost and half of its cooldown.<br>Crippling Strike resets Darius's autoattack timer.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bb/Apprehend.png/revision/latest?cb=20130929122726",
		abilityETitle: "Apprehend",
		abilityEDescription: "PASSIVE: Darius gains armor penetration.<br>ACTIVE: After a brief delay, Darius pulls in all enemies in front of him, slowing them by 40% for 1 second, and briefly grants sight of the area around the pull.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3b/Noxian_Guillotine.png/revision/latest?cb=20130929122730",
		abilityRTitle: "Noxian Guillotine",
		abilityRDescription: "ACTIVE: After leaping unstoppably for 0.25 seconds, Darius attempts to execute the targeted enemy champion, dealing true damage, increased by 0% − 100% (based on hemorrhage stacks).<br>If Noxian Guillotine kills its target, Darius causes all nearby minions and monsters to flee in terror for 3 seconds during which they are rapidly slowed by up to 99% over the duration, and is able to recast the ability within the next 20 seconds at no additional cost. This can occur multiple times in succession.<br>At rank 3, if Noxian Guillotine kills its target, its cooldown resets completely."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Garen.png?image=w_140&v=15354684000",
		name: "Garen",
		id: "4",
		position: "Top",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143554",
		modalTitleMoniker: "The Might Of Demacia",
		quote: "\"This kingdom, and its people, have given me everything. What kind of man would I be if I gave any less in return?\"",
		biography: "A proud and noble warrior, Garen fights as one of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a veritable whirlwind of righteous steel.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7f/Perseverance.png/revision/latest?cb=20140108012341",
		passiveTitle: "Perseverance",
		passiveDescription: "INNATE: Garen passively regenerates [0.2 / 0.8% maximum health every half-second] and is doubled to [0.4 / 1.6% maximum health every half-second] while below 25 / 50% of his maximum health.<br>This regeneration is interrupted for 9 / 4 seconds if he takes non-minion damage or if he is hit by an enemy ability.<br>At level 11, damage from non-epic monsters will no longer stop Perseverance.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/17/Decisive_Strike.png/revision/latest?cb=20140108012209",
		abilityQTitle: "Decisive Strike",
		abilityQDescription: "ACTIVE: Garen cleanses himself of all slows affecting him and gains 30% bonus movement speed for a few seconds.<br>Additionally, his next basic attack within 4.5 seconds deals bonus physical damage, and silences his target for 1.5 seconds.<br>Decisive Strike resets Garen's autoattack timer.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/25/Courage.png/revision/latest?cb=20140108012020",
		abilityWTitle: "Courage",
		abilityWDescription: "PASSIVE: Garen permanently gains 0.25 bonus armor and 0.25 bonus magic resistance every time he kills an enemy unit, up to a maximum of 40 bonus resistances at 160 unit kills.<br>ACTIVE: Garen reduces incoming physical and magic damage by 60% and has 60% Tenacity for the first 0.75 seconds. For the rest of the duration Garen reduces incoming physical and magic damage by 30%.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/15/Judgment.png/revision/latest?cb=20140108041510",
		abilityETitle: "Judgment",
		abilityEDescription: "ACTIVE: Garen rapidly spins his sword around his body [5 − 10 (based on level) times] for 3 seconds, dealing physical damage with each spin to nearby enemies.<br>While spinning, Garen cannot basic attack and is ghosted.<br>Judgment deals 33% bonus damage when hitting a single target and can critically strike for 50% bonus damage.<br>Enemy champions hit 4 times have their armor reduced by 25% for 6 seconds. Hits after the 4th refresh the duration of the debuff.<br>After 1 second, Garen can reactivate to cancel it immediately, reducing its cooldown by its remaining duration.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/ce/Demacian_Justice.png/revision/latest?cb=20160608022450",
		abilityRTitle: "Demacian Justice",
		abilityRDescription: "PASSIVE: The enemy with the most kills in the last 5 minutes is marked as the Villain. The mark cannot be assigned to another champion while Garen is in combat with the Villain. If more than one enemy has the same bounty, the enemy who received it first is marked the Villain.<br>Garen's basic attacks and each spin of Judgment against the Villain deal 1% of their maximum health as bonus true damage on-hit.<br>ACTIVE: Garen calls upon the might of Demacia to attempt to execute the target enemy champion, dealing them magic damage, converted to true damage when targeting the Villain."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Irelia.png?image=w_140&v=15354684000",
		name: "Irelia",
		id: "5",
		position: "Top, Middle",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143554",
		modalTitleMoniker: "The Blade Dancer",
		quote: "\"There was a time when I danced only for myself. Now, I dance for the First Lands.\"",
		biography: "The Noxian occupation of Ionia produced many heroes, none more unlikely than young Irelia of Navori. Trained in the ancient dances of her province, she adapted her art for war, using the graceful and carefully practised movements to levitate a host of deadly blades. After proving herself as a fighter, she was thrust into the role of resistance leader and figurehead, and to this day remains dedicated to the preservation of her homeland.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2c/Ionian_Fervor.png/revision/latest?cb=20180411161028",
		passiveTitle: "Ionian Fervor",
		passiveDescription: "INNATE: Irelia gains 1 Ionian Fervor stack for every enemy champion hit by her abilities, or if she hits at least one non-champion, stacking up to 4 times. Ionian Fervor lasts for 6 seconds, with basic attacks against champions and large and epic monsters refreshing the duration.<br>IONIAN FERVOR: Irelia's basic attacks deal 4 − 17 (based on level) (+ 4% bonus AD) bonus magic damage per stack, up to 16 − 68 (based on level) (+ 16% bonus AD). At maximum stacks, Irelia gains 30 / 40 / 50% bonus attack speed and deals an additional 32 − 136 (based on level) (+ 32% bonus AD) magic damage against shields.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/92/Bladesurge.png/revision/latest?cb=20180411160934",
		abilityQTitle: "Bladesurge",
		abilityQDescription: "PASSIVE: Enemy champions and large monsters hit by Flawless Duet and Vanguard's Edge's initial barrage are marked for 5 seconds, consumed with Bladesurge.<br>ACTIVE: Irelia dashes through the target enemy, dealing physical damage, applying on-hit effects and healing herself. Bladesurge deals double damage to minions.<br>Bladesurge's cooldown is refunded if the target was marked or dies to Bladesurge.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f1/Defiant_Dance.png/revision/latest?cb=20180411160954",
		abilityWTitle: "Defiant Dance",
		abilityWDescription: "FIRST CAST: Irelia aligns her blades around her, channelling for up to 1.5 seconds, during which she reduces incoming damage by 40% (+ 7% per 100 AP). Defiant Dance's channel cannot be interrupted by crowd control.<br>SECOND CAST: After a 0.07-second delay, Irelia swipes with her blades in the target direction, dealing physical damage to all enemies around her and in a line, increased by 0% − 100% (based on channel time).<br>The SECOND CAST activates automatically toward the cursor's direction at the end of the duration.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2e/Flawless_Duet.png/revision/latest?cb=20180411161012",
		abilityETitle: "Flawless Duet",
		abilityEDescription: "ACTIVE: Irelia sends a blade to the target location for up to 3.5 seconds. After a 0.35-second delay, Flawless Duet may be recast to send another blade out, and does so automatically at Irelia's position if the first blade would expire, though not if she is muted.<br>Once both blades have been placed, they fly toward each other after a 0.25-second delay, dealing magic damage and stunning all enemies struck for 0.75 seconds.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5f/Vanguard%27s_Edge.png/revision/latest?cb=20180411161131",
		abilityRTitle: "Vanguard's Edge",
		abilityRDescription: "ACTIVE: Irelia launches a barrage of blades through a wide line in the target direction, exploding outwards upon hitting a champion, dealing magic damage to all enemies struck.<br>The blades form into a spade-shaped perimeter around the explosion for a few seconds, knocking aside all enemies, though not rendering them airborne. Enemies that pass through the blades are dealt magic damage, and are disarmed while being slowed by 60% for 1.5 seconds."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Jax.png?image=w_140&v=15354684000",
		name: "Jax",
		id: "6",
		position: "Top, Jungle",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143556",
		modalTitleMoniker: "Grandmaster At Arms",
		quote: "\"Who wants a piece of the champ?\"",
		biography: "Unmatched in both his skill with unique armaments and his biting sarcasm, Jax is the last known weapons master of Icathia. After his homeland was laid low by its own hubris in unleashing the Void, Jax and his kind vowed to protect what little remained. As magic now rises in the world, this slumbering threat stirs once more, and Jax roams Valoran, wielding the last light of Icathia and testing all warriors he meets to see if any are strong enough to stand beside him...",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/84/Relentless_Assault.png/revision/latest?cb=20171223030851",
		passiveTitle: "Relentless Assault",
		passiveDescription: "INNATE: Jax gains 3.5% − 11% (based on level) bonus attack speed for 2.5 seconds every time he lands a basic attack, stacking up to 8 times for a maximum of 28% − 88% (based on level) bonus attack speed.<br>Stacks fall off one at a time every 0.25 seconds after not attacking for 2.5 seconds.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f6/Leap_Strike.png/revision/latest?cb=20171223030831",
		abilityQTitle: "Leap Strike",
		abilityQDescription: "ACTIVE: Jax dashes to the target unit or ward.<br>If his target is an enemy, he deals physical damage to them.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/57/Empower.png/revision/latest?cb=20171223030800",
		abilityWTitle: "Empower",
		abilityWDescription: "ACTIVE: Jax's next basic attack or Leap Strike within 10 seconds deals bonus magic damage. If Empower is used on a basic attack, it will have 50 bonus range.<br>Empower resets Jax's autoattack timer.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/66/Counter_Strike.png/revision/latest?cb=20171223030746",
		abilityETitle: "Counter Strike",
		abilityEDescription: "ACTIVE: Jax enters Evasion, a defensive stance for up to 2 seconds, causing all basic attacks against him to miss. Jax also takes 25% reduced damage from all area of effect abilities. After 1 second, Jax can reactivate to end it immediately.<br>At the end of the duration, Jax stuns all nearby enemies for 1 second and deals physical damage to them, increased by 20% for each attack dodged, up to a 100% increase.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/24/Grandmaster%27s_Might.png/revision/latest?cb=20171223030814",
		abilityRTitle: "Grandmaster's Might",
		abilityRDescription: "PASSIVE: Jax deals bonus magic damage on every third basic attack within 2.5 seconds of each other.<br>ACTIVE - THE CHAMP: Jax gains bonus armor and bonus magic resistance for 8 seconds."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Katarina.png?image=w_140&v=15354684000",
		name: "Katarina",
		id: "7",
		position: "Middle",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143556",
		modalTitleMoniker: "The Sinister Blade",
		quote: "\"Never question my loyalty. You will never know what I endure for it.\"",
		biography: "Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest daughter to the legendary General Du Couteau, she made her talents known with swift kills against unsuspecting enemies. Her fiery ambition has driven her to pursue heavily guarded targets, even at the risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her duty amid a whirlwind of serrated daggers.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/ba/Voracity.png/revision/latest?cb=20170707191122",
		passiveTitle: "Voracity",
		passiveDescription: "INNATE: Whenever an enemy champion dies within 3 seconds of Katarina damaging them, her cooldowns are reduced by 15 seconds.<br>SINISTER STEEL: Whenever Katarina retrieves a Dagger, she uses it to slash through all nearby enemies, dealing 68 − 240 (based on level) (+ 100% bonus AD) (+ 55 / 70 / 85 / 100% AP) magic damage and reducing Shunpo's cooldown by 78 / 84 / 90 / 96%.<br>Daggers last 4 seconds before disappearing.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/eb/Bouncing_Blade.png/revision/latest?cb=20170818190513",
		abilityQTitle: "Bouncing Blade",
		abilityQDescription: "ACTIVE: Katarina throws a Dagger to the target enemy that bounces to up to 2 nearby enemies, dealing magic damage to each target.<br>The Dagger then lands on the ground 350 units opposite from where it struck the target. The time to land from striking the target is the same regardless of distance traveled.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/aa/Preparation.png/revision/latest?cb=20170818190438",
		abilityWTitle: "Preparation",
		abilityWDescription: "ACTIVE: Katarina tosses a Dagger into the air above her current location and gains a decaying bonus movement speed until it lands after 1.25 seconds.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/72/Shunpo.png/revision/latest?cb=20170818190450",
		abilityETitle: "Shunpo",
		abilityEDescription: "ACTIVE: After 0.075 seconds, Katarina blinks to the target location around the target unit or Dagger, dealing magic damage to the nearest enemy in range.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9f/Death_Lotus.png/revision/latest?cb=20170707191154",
		abilityRTitle: "Death Lotus",
		abilityRDescription: "ACTIVE: Katarina rapidly spins in place for 2.5 seconds, throwing a dagger every 0.166 seconds to up to 3 nearby enemy champions, dealing magic damage and applying Grievous Wounds for 3 seconds.<br>Death Lotus cannot be cancelled by movement and basic attack commands in the first and last 0.25 seconds of channeling."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Pantheon.png?image=w_140&v=15354684000",
		name: "Pantheon",
		id: "8",
		position: "Jungle, Top",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143554",
		modalTitleMoniker: "The Artisan Of War",
		quote: "\"Bring forth one true champion, or a hundred more like you, and then we shall have a battle that will be spoken of until the end of time.\"",
		biography: "The peerless warrior known as Pantheon is a nigh-unstoppable paragon of battle. He was born among the Rakkor, a warlike people living on the flanks of Mount Targon, and after climbing the mountain's treacherous peak and being deemed worthy, he was chosen to become the earthly incarnation of the celestial Aspect of War. Imbued with inhuman power, he relentlessly seeks the enemies of Targon, leaving only corpses in his wake.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d7/Aegis_Protection.png/revision/latest?cb=20171223033114",
		passiveTitle: "Aegis Protection",
		passiveDescription: "INNATE: Pantheon gains a stack of Aegis Protection when he lands a basic attack or casts an ability, up to a maximum of 4. Upon reaching 4 stacks, he consumes all stacks and gains Aegis Protection.<br>AEGIS PROTECTION: Pantheon blocks the next incoming basic attack from an enemy champion, large monster, or the next incoming shot from a turret.<br>Stacks of Aegis Protection cannot be gained during the blocking, also he cannot gain 2 Aegis Protection at the same time.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Spear_Shot.png/revision/latest?cb=20171223033227",
		abilityQTitle: "Spear Shot",
		abilityQDescription: "ACTIVE: Pantheon hurls his spear at the target enemy, dealing them physical damage.<br>Certain Death causes Spear Shot to deal 100% bonus damage.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Aegis_of_Zeonia.png/revision/latest?cb=20130929123144",
		abilityWTitle: "Aegis of Zeonia",
		abilityWDescription: "ACTIVE: Pantheon dashes to the target enemy, dealing them magic damage, stunning them for 1 second, and gaining Aegis Protection.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ea/Heartseeker_Strike.png/revision/latest?cb=20171223033212",
		abilityETitle: "Heartseeker Strike",
		abilityEDescription: "PASSIVE - CERTAIN DEATH: Pantheon's basic attacks and Spear Shot critically strike all enemies below 15% maximum health.<br>ACTIVE: Pantheon channels for 0.75 seconds, dealing physical damage to all enemies in a cone in front of him at 0.25 seconds intervals. The total damage is reduced to 60% against non-champions.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/dd/Grand_Skyfall.png/revision/latest?cb=20171223033150",
		abilityRTitle: "Grand Skyfall",
		abilityRDescription: "ACTIVE: Pantheon begins channeling and, after 2 seconds, leaps into the air and becomes untargetable. He then blinks to the target location and plummets down, striking after 2 seconds and becoming targetable once more.<br>Enemies within the impact zone take magic damage, increased by up to 100% based on their proximity to the epicenter, and are slowed by 35% for 1 second.<br>Grand Skyfall's cooldown is reduced to 30 seconds if the channel is interrupted or canceled."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Renekton.png?image=w_140&v=15354684000",
		name: "Renekton",
		id: "9",
		position: "Top",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143554",
		modalTitleMoniker: "The Butcher Of The Sands",
		quote: "\"Blood and vengeance.\"",
		biography: "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the armies of Shurima to countless victories. However, after the empire's fall, Renekton was entombed beneath the sands, and slowly, as the world turned and changed, he succumbed to insanity. Now free once more, he is utterly consumed with finding and killing his brother, Nasus, who he blames, in his madness, for the centuries he spent in darkness.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fa/Reign_of_Anger.png/revision/latest?cb=20180301214818",
		passiveTitle: "Reign of Anger",
		passiveDescription: "INNATE: Renekton generates 5 Fury each time he lands a basic attack on an enemy, losing 4 Fury per second if he hasn't dealt or taken damage in the last 12 seconds.<br>When at/above 50 Fury, Renekton's next basic ability consumes 50 Fury to enhance its effects (does not generate Fury).<br>REIGN OF ANGER: Renekton gains 50% more Fury from all sources while below 50% maximum health.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f3/Cull_the_Meek.png/revision/latest?cb=20180301214744",
		abilityQTitle: "Cull the Meek",
		abilityQDescription: "ACTIVE: Renekton deals physical damage to all nearby enemies, gaining 2.5 Fury as well as healing himself for each unit hit.<br>Against champions, the Fury generated is quadrupled and the healing is tripled.<br>REIGN OF ANGER: Cull the Meek deals additional damage and triples both the healing and its cap.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b9/Ruthless_Predator.png/revision/latest?cb=20180301214833",
		abilityWTitle: "Ruthless Predator",
		abilityWDescription: "ACTIVE: Renekton's next basic attack within 7 seconds gains 50 bonus range and strikes his target twice (each hit applies on-hit effects and grants Fury) dealing physical damage and stunning for 0.75 seconds. Hitting an enemy champion grants 10 bonus Fury.<br>REIGN OF ANGER: Ruthless Predator strikes Renekton's target 3 times, deals 50% additional damage, and increases the stun duration to 1.5 seconds.<br>Ruthless Predator resets Renekton's basic attack timer.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ad/Slice.png/revision/latest?cb=20180301214849",
		abilityETitle: "Slice and Dice",
		abilityEDescription: "FIRST CAST - SLICE: Renekton dashes in the target direction, dealing physical damage to all enemies he passes through and generating Fury (2 per non-champion, 10 per champion) for each unit hit.<br>Hitting an enemy allows Renekton to cast Dice within the next 4 seconds.<br>SECOND CAST - DICE: Renekton dashes in the target direction, dealing Slice's physical damage to all enemies he passes through and generating Fury (2 per non-champion, 10 per champion) for each unit hit.<br>REIGN OF ANGER: Dice deals additional damage to all enemies and reduces their armor for 4 seconds.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8e/Dominus.png/revision/latest?cb=20180301214803",
		abilityRTitle: "Dominus",
		abilityRDescription: "ACTIVE: Renekton empowers himself for 15 seconds, gaining bonus health, increased size, 25 bonus range and 20 Fury.<br>For the duration, he deals magic damage each half second to all nearby enemies and generates 5 Fury per second (total 75)"
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Rengar.png?image=w_140&v=15354684000",
		name: "Rengar",
		id: "10",
		position: "Jungle, Top",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143554",
		modalTitleMoniker: "The Pridestalker",
		quote: "\"Prey on the weak and you may survive. Prey on the strong and you will truly live.\"",
		biography: "Rengar is a ferocious vastayan trophy hunter who lives for the thrill of tracking down and killing dangerous creatures. He scours the world for the most fearsome beasts he can find, especially seeking any trace of Kha'Zix, the Void creature who scratched out his eye. Rengar stalks his prey neither for food nor glory, but for the sheer beauty of the pursuit.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6e/Unseen_Predator.png/revision/latest?cb=20170818193601",
		passiveTitle: "Unseen Predator",
		passiveDescription: "INNATE: While in brush or camouflaged, Rengar's basic attacks gain 600 bonus range and cause him to leap to enemies beyond his normal melee range. This bonus lasts for 0.25 seconds upon exiting brush or stealth.<br>Leaping when on 0 Ferocity generates 1 Ferocity.<br>FEROCITY: Rengar generates 1 Ferocity whenever he casts a basic ability. Reaching 4 Ferocity makes his next ability empowered, granting an additional cast along with 30% / 40% / 50% bonus movement speed for 1.5 seconds at the cost of all Ferocity. Reaching 4 Ferocity with Savagery or Bola Strike locks its empowered version for 0.1 seconds before and after casting it. All Ferocity is lost after being out-of-combat for 8 seconds.<br>BONETOOTH NECKLACE: Takedowns within 1.5 seconds of being damaged by Rengar grant him a Trophy per unique enemy champion (max 5). An additional one is made available through the event The Hunt is On!.<br>Trophies grant 1% − 36% (based on trophies) bonus AD as bonus attack damage.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bf/Savagery.png/revision/latest?cb=20180221210255",
		abilityQTitle: "Savagery",
		abilityQDescription: "ACTIVE: Rengar's next two basic attacks within 3 seconds gain 40% bonus attack speed, with the first also dealing bonus physical damage and having 25 bonus range.<br>EMPOWERED ACTIVE: Savagery's bonus physical damage is modified and grants Rengar 50% − 101% (based on level) bonus attack speed for 5 seconds.<br>Savagery resets Rengar's basic attack timer.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/39/Battle_Roar.png/revision/latest?cb=20130929123207",
		abilityWTitle: "Battle Roar",
		abilityWDescription: "PASSIVE: Rengar stores 50% of the damage he's taken in the last 1.5 seconds as Grey Health (75% versus monsters).<br>ACTIVE: Rengar lets out a battle roar, dealing magic damage to nearby enemies and healing Rengar for his Grey Health.<br>EMPOWERED ACTIVE: Battle Roar's magic damage is modified and additionally cleanses.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d3/Bola_Strike.png/revision/latest?cb=20130929123208",
		abilityETitle: "Bola Strike",
		abilityEDescription: "ACTIVE: Rengar throws a bola in the target direction, dealing physical damage to the first enemy hit and slowing them for 1.75 seconds.<br>EMPOWERED ACTIVE: Bola Strike's physical damage is modified and roots its target for 1.75 seconds.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/56/Thrill_of_the_Hunt.png/revision/latest?cb=20170818193550",
		abilityRTitle: "Thrill of the Hunt",
		abilityRDescription: "ACTIVE: Rengar channels his predatory instincts, becoming camouflaged after 2 seconds and gaining bonus movement speed for the duration. Attacking or casting most spells ends Thrill of the Hunt.<br>Rengar gains true sight of the nearest enemy champion, who he can leap to deal 50% AD bonus physical damage and reduce their armor for 4 seconds.<br>The nearest enemy champion to Rengar alerts all allies within 1200 range about his presence."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Shen.png?image=w_140&v=15354684000",
		name: "Shen",
		id: "11",
		position: "Top, Support",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143558",
		modalTitleMoniker: "The Eye Of Twilight",
		quote: "\"The Eye is blind to fear, to hate, to love - to all things that would sway equilibrium.\"",
		biography: "Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit realm and the physical world. Tasked with enforcing the equilibrium between them, Shen wields blades of steel and arcane energy against any who would threaten it.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1e/Ki_Barrier.png/revision/latest?cb=20160113193213",
		passiveTitle: "Ki Barrier",
		passiveDescription: "INNATE: After completing an ability's effects, Shen shields himself from 50 − 101 (based on level) (+ 14% bonus health) damage for 2.5 seconds. If the triggering ability successfully affected at least one champion, Ki Barrier's cooldown is reduced by 4 − 7.5 (based on level) seconds.<br>Shen's power manifests as a Spirit Blade that he can control with his abilities.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7c/Twilight_Assault.png/revision/latest?cb=20170217190901",
		abilityQTitle: "Twilight Assault",
		abilityQDescription: "ACTIVE: Shen recalls his Spirit Blade to his location. Enemies the blade collides with are slowed for the next 2 seconds when moving away from Shen.<br>Once it arrives, Shen empowers his next 3 basic attacks within 8 seconds to gain 75 bonus range and deal bonus magic damage.<br>If the Spirit Blade collides with an enemy champion, the empowerment is enhanced, dealing increased bonus magic damage and gaining 50% bonus attack speed.<br>Empowered attacks against monsters instead deal 100% bonus damage, but their total damage is capped.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5e/Spirit%27s_Refuge.png/revision/latest?cb=20170217191016",
		abilityWTitle: "Spirit's Refuge",
		abilityWDescription: "ACTIVE: Shen primes his Spirit Blade, creating an area around it. If Shen or an allied champion enter the area, or after 2 seconds, the Spirit Blade creates a protective zone around it for 1.75 seconds, causing allies in the zone to dodge attacks.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/92/Shadow_Dash.png/revision/latest?cb=20160113193419",
		abilityETitle: "Shadow Dash",
		abilityEDescription: "PASSIVE: Damage from Shadow Dash and  Twilight Assault recovers 30 / 35 / 40 energy.<br>ACTIVE: Shen dashes in the target direction, dealing physical damage to all enemy champions and monsters he hits and taunting them for 1.5 seconds.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/85/Stand_United_2.png/revision/latest?cb=20170208230402",
		abilityRTitle: "Stand United",
		abilityRDescription: "ACTIVE: Shen channels for 3 seconds, shielding the target allied champion for up to 5 seconds, increased by 0% − 60% (based on target's missing health).<br>Upon completing the channel, Shen and his Spirit Blade blink to the target ally's location."
	},
	{
		url: "http://opgg-static.akamaized.net/images/lol/champion/Sion.png?image=w_140&v=15354684000",
		name: "Sion",
		id: "12",
		position: "Top, Support",
		modalTitleIcon: "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png/revision/latest/scale-to-width-down/61?cb=20181117143558",
		modalTitleMoniker: "The Undead Juggernaut",
		quote: "\"War is eternal... as am I.\"",
		biography: "A war hero from a bygone era, Sion was revered in Noxus for choking the life out of a Demacian king with his bare hands—but, denied oblivion, he was resurrected to serve his empire even in death. His indiscriminate slaughter claimed all who stood in his way, regardless of allegiance, proving he no longer retained his former humanity. Even so, with crude armor bolted onto rotten flesh, Sion continues to charge into battle with reckless abandon, struggling to remember his true self between the swings of his mighty axe.",
		passiveImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c2/Glory_in_Death.png/revision/latest?cb=20170818194247",
		passiveTitle: "Glory in Death",
		passiveDescription: "INNATE: Upon taking fatal damage, Sion becomes untargetable for 1.5 seconds, after which he enters a frenzy, restoring himself to 100% maximum health but losing 2 − 19 (based on level) every 0.265 seconds, increasing by [70% of the base value] per subsequent tick.<br>Sion can freely move and use basic attacks during this time, gaining 100% life steal, attacking at 1.75 attack speed, and dealing 10% of the target’s maximum health bonus physical damage on-hit, capped at 75 against minions and monsters.<br>Glory in Death cannot last more than 60 seconds. Reaching the time will cause Sion to instantly die, regardless of his remaining health. While Glory in Death is active Sion's standard abilities are replaced with Death Surge.",
		abilityQImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/32/Decimating_Smash.png/revision/latest?cb=20170818194232",
		abilityQTitle: "Decimating Smash",
		abilityQDescription: "FIRST CAST: Sion channels for up to 2 seconds to swing in the target direction, increasing Decimating Smash's damage by 0% − 200% (based on channel time).<br>If the channel is interrupted by crowd control, Decimating Smash goes on a reduced Cooldown reduction icon 2 seconds cooldown, but no mana is refunded.<br>SECOND CAST: Sion flails his axe, dealing physical damage to all enemies in the target area, and slowing them by 50% for 0.25 seconds. Decimating Smash deals 80% damage against monsters, and 60% against minions.<br>If Decimating Smash was charged for at least 1 second, Sion instead slams his axe down, knocking up all enemies hit for 0.5 − 1 (based on channel time) seconds and stunning them for 1.25 − 2.25 (based on channel time) seconds.",
		abilityWImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/20/Soul_Furnace.png/revision/latest?cb=20170818194329",
		abilityWTitle: "Soul Furnace",
		abilityWDescription: "PASSIVE: Sion permanently gains 4 bonus health whenever he kills an enemy, increased to 15 bonus health against large enemies and enemy champion takedowns.<br>FIRST CAST: Sion shields himself for up to 6 seconds. After 3 seconds, Soul Furnace can be reactivated to detonate the shield, detonating automatically if it persists for the full duration.<br>SECOND CAST: Soul Furnace's shield detonates to deal magic damage to enemies around Sion, capped at 400 against minions and monsters.",
		abilityEImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a8/Roar_of_the_Slayer.png/revision/latest?cb=20170818194259",
		abilityETitle: "Roar of the Slayer",
		abilityEDescription: "ACTIVE: Sion bellows in the target direction, dealing magic damage to the first enemy hit, slowing them for 2.5 seconds as well as having their armor reduced by 20% for 4 seconds.<br>If the target is a minion or non-epic monster, it is knocked back, in the same line, up to 1300 units away from Sion, dealing the same damage and applying the same effects to all enemies it passes through. Projectile enemies take their damage once they are stopped, by either colliding with terrain or reaching the end of their trajectory.",
		abilityRImg: "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8a/Unstoppable_Onslaught.png/revision/latest?cb=20170818194344",
		abilityRTitle: "Unstoppable Onslaught",
		abilityRDescription: "ACTIVE: Sion charges forward in the target direction for up to 8 seconds during which he is pacified and immune to crowd control. Sion can adjust his trajectory over the duration at a highly reduced capacity.<br>Upon re-activating the ability or reaching the end of the duration, Sion leaps forward for 200 range, slamming the ground around him upon landing, dealing physical damage. Colliding with an enemy champion or terrain will stop the charge or leap prematurely. Charging into terrain will also stun Sion for 0.5 seconds.<br>The charge and slam deal physical damage to all enemies including turrets, with the base damage increasing by 0% − 166.67% (based on charge time), the bonus AD ratio increasing by 0% − 100% (based on charge time), while also slowing enemies for 3 seconds.<br>When not colliding with terrain Sion will additionally pull and knock up all enemies around him for 0.75 seconds. When the knock up finishes they remain stunned for 0.25 − 1.25 (based on charge time) seconds."
	}
];

const createListBlock = () => {
	const mainContainer = document.createElement('div');
	mainContainer.className = "container";
	const listContainer = document.createElement('div');
	const listContent = generateHeroesListContent(champions);

	listContainer.className = "heroes-list row justify-content-between";
	listContainer.innerHTML = listContent;
	mainContainer.appendChild(listContainer);
	document.querySelector("#main").appendChild(mainContainer);
};

const filterHeroesByInput = (heroes, inputValue) => heroes.filter(({ name }) => {
	const championName = name.toLowerCase();
	const lcInputValue = inputValue.toLowerCase();
	return inputValue ? championName.includes(lcInputValue) : name === heroes;
});

const generateHeroesListContent = (heroes) => heroes.reduce((acc, el) => {
	acc += `<div class="elem col-md-4 col-sm-6 d-flex">
				<img class="champion-img" src="${el.url}" data-name="${el.name}" data-toggle="modal" data-target="#infoModal">
				<div class='d-flex flex-column'>
					<span class="hero-name align-items-start">
						${el.name}
					</span>
					<span class="align-items-end hero-position">
						${el.position}
					</span>
				</div>
			</div>`;
	return acc;
}, "");

createListBlock();

const input = document.querySelector('#search');
const choise = document.querySelector('.champions-dropdown');

choise.addEventListener('click', (event) => {
	let valueEvent = event.target.classList.contains('dropdown-item') ? event.target.dataset.champion : "";
	const list = document.querySelector('.heroes-list');
	if(event.target.dataset.champion === "All_champions"){
		const newListContent = generateHeroesListContent(champions);
		list.innerHTML = newListContent;
		input.value = "";
	} else {
		const filteredList = filterHeroesByInput(champions, valueEvent);
		const newListContent = generateHeroesListContent(filteredList);
		list.innerHTML = newListContent;
		input.value = event.target.dataset.champion;
	}
	renderModal();
});

input.addEventListener('input', (event) => {
	const filteredList = filterHeroesByInput(champions, event.target.value);
	const newListContent = generateHeroesListContent(filteredList);
	const list = document.querySelector('.heroes-list');
	list.innerHTML = newListContent;
	renderModal();
});

renderModal();

function renderModal(){
	document.querySelectorAll('.champion-img').forEach((el) => el.addEventListener('click', (event) => {
		const championsAttribute = filterHeroesByInput(champions,event.target.dataset.name)[0];
		document.querySelector('#infoModal').innerHTML = 
			`<div class="modal-dialog" role="document">
			    <div class="modal-content">
			    	<div class="background-${championsAttribute.id}">
			    	<div class="modal-header">
			        	<h5 class="modal-title" id="exampleModalLongTitle">
			        		<img src="${championsAttribute.modalTitleIcon}">
			        		<span class="hero-name">${championsAttribute.name}</span>${championsAttribute.modalTitleMoniker}
			        	</h5>
			        	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			        		<span aria-hidden="true">&times;</span>
			        	</button>
			    	</div>
			    	<div class="modal-body">
			      		<blockquote class="blockquote text-right">
		  					<p class="mb-0">${championsAttribute.quote}</p>
		  					<footer class="blockquote-footer text-light"><cite title="Source Title">${championsAttribute.name}</cite></footer>
						</blockquote>
			      		${championsAttribute.biography}
			    	</div>
			    	</div>
			    	<div class="modal-footer flex-column">
			        	<div>
			        		<div class="modal-header">
			        			<h5>${championsAttribute.passiveTitle} (passive)</h5>
			        		</div>
			        		<div class="d-flex">
			        			<img src="${championsAttribute.passiveImg}">
			        			<p>${championsAttribute.passiveDescription}</p>
			        		</div>
			        	</div>
						<div>
			        		<div class="modal-header">
			        			<h5>${championsAttribute.abilityQTitle}</h5>
			        		</div>
			        		<div class="d-flex">
			        			<img src="${championsAttribute.abilityQImg}">
			        			<p>${championsAttribute.abilityQDescription}</p>
			        		</div>
			        	</div>
			        	<div>
			        		<div class="modal-header">
			        			<h5>${championsAttribute.abilityWTitle}</h5>
			        		</div>
			        		<div class="d-flex">
			        			<img src="${championsAttribute.abilityWImg}">
			        			<p>${championsAttribute.abilityWDescription}</p>
			        		</div>
			        	</div>
			        	<div>
			        		<div class="modal-header">
			        			<h5>${championsAttribute.abilityETitle}</h5>
			        		</div>
			        		<div class="d-flex">
			        			<img src="${championsAttribute.abilityEImg}">
			        			<p>${championsAttribute.abilityEDescription}</p>
			        		</div>
			        	</div>
			        	<div>
			        		<div class="modal-header">
			        			<h5>${championsAttribute.abilityRTitle}</h5>
			        		</div>
			        		<div class="d-flex">
			        			<img src="${championsAttribute.abilityRImg}">
			        			<p>${championsAttribute.abilityRDescription}</p>
			        		</div>
			        	</div>
			    	</div>
			    </div>
			</div>`	
	}))
}