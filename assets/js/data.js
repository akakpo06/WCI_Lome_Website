/* Website Data Container for dynamic layout to replaced by data fetched from the database on next versions */

let pillars = {
    "faith": ["faith",`'<i>For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.'</i>
    <br/><b>1 John 5:4</b><br/><br/>
    <i>Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.'</i>
    <br/><b>Ephesians 6:16</b><br/><br/>`],
    
    "word": ["The Word",`'<i>“Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high.”</i>
        <br/><b>Heb 1:3</b><br/><br/>
        <br/><b>John 1:1-12</b><br/><br/>`],

    "supernatural": ["The Supernatural",`'<i>“The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.”</i>
        <br/><b>1 John 3:8</b><br/><br/>
        <br/><b>Ps 82:5-7</b><br/><br/>`],

    "praise": ["Praise",`'<i>“And when they began to sing and to praise, the Lord set ambushments against the children of Ammon, Moab, and mount Seir, which were come against Judah: and they were smitten.”</i>
        <br/><b>2 Chro 20:22</b><br/><br/>
        <br/><b>Psalm 67:1-7</b><br/><br/>
        <br/><b>Psalm 149:1-9</b><br/><br/>`],

    "holy_spirit": ["The Holy Spirit",`'<i>“And it shall come to pass in that day, that his burden shall be taken away from off thy shoulder, and his yoke from off thy neck, and the yoke shall be destroyed because of the anointing.”</i>
        <br/><b>Isaiah 10:27</b><br/><br/>
        <br/><b>Acts 1:1-8</b><br/><br/>`],

    "prosperity": ["Prosperity",`'<i>“Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.”</i>
        <br/><b> 3 John 2</b><br/><br/>
        <br/><b>Psalm 35:27</b><br/>
        <br/><b>Zechariah 1:17</b><br/><br/>`],

    "vision": ["Vision",`'<i>“Where there is no vision, the people perish: but he that keepeth the law, happy is he.”</i>
        <br/><b>Proverbs 29:18</b><br/><br/>
        <br/><b> Jeremiah 29:11</b><br/><br/>`],

    "prayer": ["Prayer",`'<i>“And this is the confidence that we have in him, that, if we ask anything according to his will, he heareth us.”</i>
        <br/><b>1 John 5:14</b><br/><br/>`
    ],

    "healing": ["Healing",`'<i>“That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.”</i>
        <br/><b>Matthew 8:17</b><br/><br/>
        <br/><b>Jeremiah 8:22</b><br/>
        <br/><b>Matthew 8:17</b><br/><br/>`],

    "wisdom": ["Wisdom",`'<i>“And wisdom and knowledge shall be the stability of thy times, and strength of salvation: the fear of the Lord is his treasure.”</i>
        <br/><b> Isaiah 33:6</b><br/><br/>
        <br/><b>Proverbs 24:3-4</b><br/><br/>`],

    "consecration": ["Consecration",`'<i>“Nevertheless the foundation of God standeth sure, having this seal, the Lord knoweth them that are his. And let every one that nameth the name of Christ depart from iniquity. “</i>
        <br/><b>2 Timothy 2:19</b><br/><br/>
        <br/><b>Hebrews 12:14</b><br/><br/>`],

    "success": ["Success",`'<i>“This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.”</i>
        <br/><b>Jos 1:8</b><br/><br/>
        `]

}

let events = {
    "Oct_Thanks_service": ["./assets/images/thanks.png",
        "October Thanksgiving Service",
        "",
        ["Featuring",
        "End Of the Month Thanksgiving",
        "Children & Marriage dedication",
        "WOFBI October 2024 thanksgiving and graduatio ceremony"
        ],
        "27th October 2024",
        "06.30 a.m. and 08.35 a.m.",
        "10/27/2024"
        // ajouter ici un format de date que la classe date peut utiliser pour retourner unformat dde date utilisble pour la comparaison
        /*
        générer une date calculable ici avec la date texte précedente
        calculuer la dufférence entre la date obtenue et la date du jour courant
        stocker le résultat de la différence ici 
        */
    ],
    "kabod" : ["./assets/images/kabod.jpg",
            "Mega Praise Harvest : KABOD",
            "",
            ["Featuring",
                "Praise & Worship",
                "Choreography",
            ],
            "27th October 2024",
            "From 5.00 p.m. (Red Carpet: 3.00 p.m.)",
            "10/27/2024"
        ],
    "shiloh_2025" : ["./assets/images/shiloh.png",
            "SHILOH 2025",
            "",
            [],
            "10th to 15th December 2024",
            "From 5.00 p.m.",
            "12/10/2024"
        ]
}

let transports_checkpoints = {
    "Attiégou":{
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7"
    },
    "Attiégou2":{
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7"
    },
    "Attiégou3":{
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7",
        "DVA":"https://maps.app.goo.gl/mh2TS79fGpB49QfF9",
        "EPP Attiégou": "https://maps.app.goo.gl/pywgV6SQFFjodvds7"
    }
}

let giving_ways_data = {
    "flooz" : ["./assets/images/flooz.png","Flooz Money",["<b>Offering:</b> 96 52 28 28","<b>Tithe:</b> 99 95 41 85"]],
    "tmoney": ["./assets/images/tmoney.png","Tmoney",["<b>Offering:</b> 93 07 96 96","<b>Tithe:</b> 92 17 78 18"]],
    "bank": ["./assets/images/bank_trans.png","Bank Transfer",["<b>Ecobank:</b> 1400 135 900 26"]]
}

let ministries = {
    "children": ["Children's Church",`'We have a strong passion for Children and the desire to see them grow in the knowledge of Christ. We believe that as your children become rooted and grounded here, they would become and remain winners in every area of their lives in Jesus name.
    <br/>
    The Children’s church is designed to assist the children with developing a real relationship with God, Jesus Christ, and the person of the Holy Spirit by teaching them the word of faith that will deliver them from all oppressions of the devil.
    <br/>
    Our main goal as the leaders, teachers, and members of the Children’s church team is to reach out to every child with the love of Christ and do all we can to saturate the spirit, soul and body of the children with the word of God so they are equipped with all they would need to face the challenges of life and come out triumphant.
    <br/>
    We believe that it is when the children have understanding that they can begin to walk towards a lifetime of excellence in every area of their lives.
    <br/>
    The Children’s Church services holds at <b>6.30am and 8.35am.</b>`, "./assets/images/children_ministry.jpg"],

    "teens": ["Teenager's Ministry",`The Teens Church at Winners Chapel Lome TOGO is designed to reach out to our teenagers with the liberating message of faith to build them up for a glorious future.
    <br/>
    It is common knowledge that there is wide spreads decadence within the teenagers of our land. However, contrary to that moral erosion, God is set to raise men and women of honour and glory from amongst them.
    <br/>
    It is with this at heart that our teen’s church tirelessly pursues the liberation mandate as it concerns the teenagers in the language that they understand and relate to, losing them from the decadence and setting them up for a destiny of glory.
    <br/>
    Therefore, all teenagers are welcome to partake of this colourful ministry to deliver a glorious destiny. You may find the details below helpful in giving directions concerning some of the events in our teens church calendar.
    <br/>
    In addition to these set programs, there will be special programs brought to your notice from time to time for the edification of our teenagers. We encourage you to take part in them and they will bring a change of story.
    <br/>
    Teens Chuch service hold from <b>6.30 a.m to 8.30 a.m</b>
    `, "./assets/images/teenagers.jpeg"],
    

    "youth": ["Youth's Ministry",`Our Youth and Singles Ministry at Winners Chapel International Lome TOGO is designed in a unique way to enhance the value of every individual and set them up for supernatural accomplishments.
        <br/>
        This ministry is specifically focused on raising people with a difference.The programming of the youth and singles is directed at their specific needs, touching on areas like destiny, relationships and marriage, finance and many other relevant areas.
        <br/>
        We believe that when the youths and singles are spiritually buoyant, they will be definite change agents for this generation.
        <br/>
        Therefore you definitely need to be a part of this great army.Youth programs will usually be announced from time to time for your edification. Please take full advantage of them and your life will never be the same`,"./assets/images/youth.jpeg"]
}
