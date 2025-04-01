const candidatesData = [
  {
    id: 1,
    name: "Benhur Abalos",
    party: "PFP",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Abalos-300w.png",
    bio: "Benhur Abalos is a lawyer and former mayor of Mandaluyong City.",
    accomplishments: "Implemented urban renewal projects and social programs.",
    previousPosition: "Former DILG Secretary",
  },
  {
    id: 2,
    name: "Jerome Adonis",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://pbs.twimg.com/profile_images/1856903448333279233/-X4aZRFd_400x400.jpg",
    bio: "Jerome Adonis is a labor rights activist.",
    accomplishments: "Led campaigns for workers' rights and fair wages.",
    previousPosition: "Labor Union Leader",
  },
  {
    id: 3,
    name: "Wilson Amad",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Amad-300w.png",
    bio: "Wilson Amad is an independent candidate advocating for transparency.",
    accomplishments: "Exposed multiple corruption cases.",
    previousPosition: "Political Analyst",
  },
  {
    id: 4,
    name: "Jocelyn Andamo",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://www.rappler.com/tachyon/2025/01/ANDAMO-ALYN.jpg?fit=300%2C300&resize=200%2C200",
    bio: "Jocelyn Andamo is a dedicated nurse and health advocate.",
    accomplishments:
      "Advocated for improved healthcare policies and nurses' welfare.",
    previousPosition: "Secretary-General of the Filipino Nurses United (FNU)",
  },
  {
    id: 5,
    name: "Bam Aquino",
    party: "KANP",
    alliance: "Kibam",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Aquino-300w.png",
    bio: "Bam Aquino is a former senator known for his work in entrepreneurship and education.",
    accomplishments:
      "Authored the Go Negosyo Act and the Universal Access to Quality Tertiary Education Act.",
    previousPosition: "Senator (2013-2019",
  },
  {
    id: 6,
    name: "Ronnel Arambulo",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://www.rappler.com/tachyon/2025/01/ARAMBULO-RONNEL.jpg?fit=300%2C300",
    bio: "Ronnel Arambulo is a labor leader and activist.",
    accomplishments:
      "Championed workers' rights and campaigned against contractualization.",
    previousPosition: "Vice Chairperson of Kilusang Mayo Uno (KMU)​",
  },
  {
    id: 7,
    name: "Ernesto Arellano",
    party: "KKK",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Arellano-300w.png",
    bio: "Ernesto Arellano is a seasoned labor lawyer and advocate.",
    accomplishments:
      "Provided legal assistance to numerous labor unions and workers.",
    previousPosition:
      " Founding Member of the National Union of Lawyers of the Philippines (NULP).​",
  },
  {
    id: 8,
    name: "Robert Ballon",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.rappler.com/tachyon/2021/08/Screen-Shot-2021-08-31-at-2.41.12-PM.png",
    bio: " Robert Ballon is a fisherfolk leader and environmental advocate.",
    accomplishments:
      "Promoted sustainable fishing practices and marine conservation.",
    previousPosition: "President of the National Fisherfolk Organization.​",
  },
  {
    id: 9,
    name: "Abigail Binay",
    party: "NPC",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Binay-300w.png",
    bio: "Abigail Binay is a lawyer and politician known for her governance in Makati City.",
    accomplishments:
      "Spearheaded Makati’s free Wi-Fi initiative, improved healthcare services, and expanded social welfare programs.",
    previousPosition: "Mayor of Makati City (2016–present)",
  },
  {
    id: 10,
    name: "Jimmy Bondoc",
    party: "PDP",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://sa.kapamilya.com/absnews/abscbnnews/media/2023/life/12/06/20231206-jimmy-bondoc.jpg",
    bio: "Jimmy Bondoc is a singer-songwriter turned public servant, focusing on entertainment industry reforms.",
    accomplishments:
      "Advocated for the welfare of artists and worked on PAGCOR entertainment initiatives.",
    previousPosition: "Vice President for Entertainment, PAGCOR (2016–2022)",
  },
  {
    id: 11,
    name: "Bong Revilla",
    party: "Lakas",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Revilla-300w.png",
    bio: "Bong Revilla is an actor-turned-politician known for his focus on social welfare and infrastructure projects.",
    accomplishments:
      "Championed the Free Irrigation Act and helped pass laws on cultural heritage preservation.",
    previousPosition: "Senator (2019–present)",
  },
  {
    id: 12,
    name: "Bonifacio Bosita",
    party: "Independent",
    alliance: "Riding-in-Tandem",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Bosita-300w.png",
    bio: "Bonifacio Bosita is a motorcycle riders' advocate and former police officer.",
    accomplishments:
      "Advocated for motorcycle riders’ rights and safer road policies.",
    previousPosition: "House Representative, 1-Rider Partylist (2022–present)",
  },
  {
    id: 13,
    name: "Arlene Brosas",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Arlene_Brosas_-_18th_Congress.jpg",
    bio: "Arlene Brosas is a social activist focused on women’s and children’s rights.",
    accomplishments:
      "Principal author of laws against child exploitation and labor abuse.",
    previousPosition: "House Representative, GABRIELA Partylist (2016–present)",
  },
  {
    id: 14,
    name: "Roy Cabonegro",
    party: "DPP",
    alliance: "no alliance",
    image:
      "https://images.squarespace-cdn.com/content/v1/606d6a30f498b73bd3ff0277/26982aa8-06a7-4ee8-854f-43165c064d69/IMG_20211026_143731+%281%29.jpg",
    bio: "Roy Cabonegro is an environmentalist advocating for sustainable policies.",
    accomplishments:
      "Led various environmental conservation projects and climate change awareness campaigns.",
    previousPosition: "None (Environmental Activist and Educator)",
  },
  {
    id: 15,
    name: "Allen Capuyan",
    party: "PPP",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Capuyan-300w.png",
    bio: "Allen Capuyan is a former military officer and indigenous rights advocate.",
    accomplishments:
      "Led national security initiatives and indigenous peoples’ welfare programs.",
    previousPosition:
      "Chairperson, National Commission on Indigenous Peoples (2019–2022)",
  },
  {
    id: 16,
    name: "Teodoro Casiño",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image: "https://atenews.ph/wp-content/uploads/2013/04/Casino.jpg",
    bio: "Teodoro Casiño is a journalist and activist advocating for labor rights and social justice.",
    accomplishments:
      "Championed workers’ rights laws and supported human rights policies.",
    previousPosition: "House Representative, Bayan Muna (2004–2013)",
  },
  {
    id: 17,
    name: "France Castro",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/HoR_Official_Portrait_%2818th_Congress%29_-_France_Castro.jpg",
    bio: "France Castro is an educator and lawmaker advocating for teachers’ rights and quality education.",
    accomplishments:
      "Pushed for salary increases for teachers and public sector workers.",
    previousPosition:
      "House Representative, ACT Teachers Partylist (2016–present)",
  },
  {
    id: 18,
    name: "Pia Cayetano",
    party: "Nacionalista",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Pia_Cayetano_%282018%29.jpg",
    bio: "Pia Cayetano is a lawyer and senator known for her work on health and women's rights.",
    accomplishments:
      "Co-authored the Reproductive Health Law and championed sports development programs.",
    previousPosition: "Senator (2019–present)",
  },
  {
    id: 19,
    name: "David d Angelo",
    party: "Bunyog",
    alliance: "no alliance",
    image:
      "https://asiapacificgreens.org/wp-content/uploads/assets/img/237149431_4193339254078499_7527407028821219322_n-300x300.jpg",
    bio: "David D'Angelo, born on October 16, 1977, in Malolos City, Bulacan, is a dedicated environmental and climate action advocate. He serves as the national president of the Green Party of the Philippines and is a member of the Climate Reality Leadership Corps.​",
    accomplishments:
      "Co-founded the Brotherhood of Destiny (BROOD) in 2002, training over 3,000 out-of-school youth to be better citizens. Played a role in the passage of the Renewable Energy Act and the Bangsamoro Basic Law. Actively involved in campaigns related to environmental protection, peace, and anti-poverty initiatives.​",
    previousPosition:
      "Candidate for municipal councilor of Atimonan, Quezon, in 2001 under the AKBAYAN Party.",
  },
  {
    id: 20,
    name: "Angelo de Alban",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/DeAlban-300w.png",
    bio: "He is known as an independent candidate who has participated in Philippine elections.",
    accomplishments:
      "Specific accomplishments are not readily available from the provided sources.",
    previousPosition:
      "Detailed information about his prior political positions is not available.",
  },
  {
    id: 21,
    name: "Leody de Guzman",
    party: "PLM",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/De-Guzman-300w.png",
    bio: "Leody de Guzman is a Filipino socialist labor rights activist. He chairs the Bukluran ng Manggagawang Pilipino, a federation of militant trade unions, and has been a prominent figure in labor movements since the 1980s.",
    accomplishments:
      "Ran for senator in the 2019 elections, advocating for labor rights and the end of contractualization. Declared his candidacy for the presidency in the 2022 elections, focusing on systemic change and labor issues.",
    previousPosition: "Senatorial candidate in the 2019 Philippine elections.",
  },
  {
    id: 22,
    name: "Ronald dela Rosa",
    party: "PDP",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://pdplaban.org.ph/wp-content/uploads/2024/01/Bato-Dela-Rosa-1024x1024.webp",
    bio: "Ronald Bato dela Rosa is a retired general who served as the Chief of the Philippine National Police from 2016 to 2018. He is known for leading the controversial war on drugs under President Rodrigo Duterte's administration.",
    accomplishments:
      "Implemented the national anti-drug campaign during his tenure as PNP Chief. Elected as a senator in the 2019 midterm elections.",
    previousPosition: "Senator (2019–present).",
  },
  {
    id: 23,
    name: "Mimi Doringo",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://www.rappler.com/tachyon/2025/01/DORINGO-MIMI.jpg?fit=300%2C300",
    bio: "Mimi Doringo is associated with the Makabayan coalition, known for its progressive stance on various national issues.",
    accomplishments:
      "Specific details about her accomplishments are not available from the provided sources.",
    previousPosition:
      "Information about her prior political positions is not readily available.",
  },
  {
    id: 24,
    name: "Arnel Escobal",
    party: "PM",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Escobal-300w.png",
    bio: "Arnel Escobal is a candidate affiliated with the Partido Manggagawa, a labor-focused political party in the Philippines.",
    accomplishments:
      "Detailed information about his accomplishments is not available from the provided sources.",
    previousPosition:
      "Information about her prior political positions is not readily available.",
  },
  {
    id: 25,
    name: "Luke Espiritu",
    party: "PLM",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Espiritu-300w.png",
    bio: "Luke Espiritu is a Filipino labor leader and lawyer. He serves as the president of Bukluran ng Manggagawang Pilipino and is a board member of the Freedom from Debt Coalition",
    accomplishments:
      "Advocates for workers' rights and various social issues, including supporting the legalization of divorce, same-sex marriage, and reproductive rights. Gained public attention during a 2022 senatorial debate for his exchanges on issues like the Marcos family's ill-gotten wealth and Martial Law.",
    previousPosition: "Senatorial candidate in the 2025 Philippine elections. ",
  },
  {
    id: 26,
    name: "Mody Espiritu",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Floranda-300w.png",
    bio: "Information about Mody Espiritu is limited. He is associated with the Makabayan coalition.",
    accomplishments:
      "Specific details are not available from the provided sources.",
    previousPosition:
      "No readily available information on prior political roles.",
  },
  {
    id: 27,
    name: "Marc Gamboa",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.rappler.com/tachyon/2025/01/GAMBOA-MARC-LOUIE.jpg?fit=300%2C300",
    bio: "Marc Gamboa is an independent candidate in Philippine politics. Further background information is limited.",
    accomplishments:
      "Specific details are not available from the provided sources.",
    previousPosition:
      "No readily available information on prior political roles.",
  },
  {
    id: 28,
    name: "Bong Go",
    party: "PDP",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://pdplaban.org.ph/wp-content/uploads/2024/01/Bong-Go-1024x1024.webp",
    bio: "Christopher Lawrence Go is a Filipino politician who has served as a senator since 2019. He was a longtime aide to former President Rodrigo Duterte before entering politics.",
    accomplishments:
      "As a senator, Go has focused on health and sports initiatives, including the establishment of Malasakit Centers to provide medical assistance to indigent patients.",
    previousPosition: "Senator (2019–present)",
  },
  {
    id: 29,
    name: "Norberto Gonzales",
    party: "PDSP",
    alliance: "no alliance",
    image:
      "https://images.gmanews.tv/webpics/2022/01/n-gonzales1_2022_01_12_19_16_48.jpg",
    bio: "Norberto Borja Gonzales is a Filipino politician who served as Secretary of National Defense from 2009 to 2010. He has been involved in various capacities within the government, including roles in national security and intelligence.",
    accomplishments:
      "During his tenure as National Defense Secretary, Gonzales focused on modernizing the armed forces and addressing internal security challenges.",
    previousPosition: "Secretary of National Defense (2009–2010)",
  },
  {
    id: 30,
    name: "Jesus Hinlo Jr.",
    party: "PDP",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Hinlo-300w.png",
    bio: "Jesus Hinlo Jr. is a Filipino lawyer and politician who served as a commissioner of the Presidential Anti-Corruption Commission in 2022.",
    accomplishments:
      "Hinlo has been active in advocating for anti-corruption measures and has contributed to various legal reforms aimed at promoting transparency and accountability in government.",
    previousPosition:
      "Commissioner of the Presidential Anti-Corruption Commission (2022)",
  },
  {
    id: 31,
    name: "Greogorio Honasan Jr.",
    party: "Reform PH",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Honasan-300w.png",
    bio: "Gregorio Ballesteros Honasan II is a retired Philippine Army officer and politician who served as Secretary of Information and Communications Technology from 2019 to 2021. He was also a senator from 1995 to 2004 and from 2007 to 2019.",
    accomplishments:
      "As a senator, Honasan focused on national security and public safety legislation. As DICT Secretary, he worked on improving the country's digital infrastructure.",
    previousPosition:
      "Secretary of Information and Communications Technology (2019–2021)",
  },
  {
    id: 32,
    name: "Relly Jose Jr.",
    party: "KBL",
    alliance: "no alliance",
    image:
      "https://www.rappler.com/tachyon/2025/01/RELLY-JOSE.jpg?fit=300%2C300&quality=100",
    bio: "Relly Jose Jr. is a Filipino politician affiliated with the Kilusang Bagong Lipunan (KBL) party. Detailed public information about his background and accomplishments is limited.",
    accomplishments:
      "Specific accomplishments are not widely documented in public sources.",
    previousPosition: "Information not available",
  },
  {
    id: 33,
    name: "Panfilo Lacson",
    party: "Independent",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66siFZ_kvohq01EYdJUwQ1Mp-0FdlLFTtRw&s",
    bio: "Panfilo Morena Lacson Sr. is a former police general and politician who served as a senator for three terms: from 2001 to 2013 and from 2016 to 2022. He was the Director General of the Philippine National Police from 1999 to 2001.",
    accomplishments:
      "Lacson is known for his anti-corruption advocacy, including efforts to abolish the pork barrel system. He authored and sponsored several significant laws, such as the Anti-Terrorism Act of 2020 and the National ID system.",
    previousPosition: "Senator (2016–2022)",
  },
  {
    id: 34,
    name: "Raul Lambino",
    party: "PDP",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Lambino-300w.png",
    bio: "Raul Loyola Lambino is a Filipino lawyer and politician who served as the Administrator and Chief Executive Officer of the Cagayan Economic Zone Authority (CEZA) from 2017 to 2022. He also served as Presidential Adviser for North Luzon from 2016 to 2017.",
    accomplishments:
      "Lambino led initiatives to promote economic development in the Cagayan Special Economic Zone and Freeport, attracting investments and boosting local employment.",
    previousPosition:
      "Administrator and Chief Executive Officer of the Cagayan Economic Zone Authority (2017–2022)",
  },
  {
    id: 35,
    name: "Lito Lapid",
    party: "NPC",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Lapid-300w.png",
    bio: "Manuel Mercado Lapid is a Filipino actor and politician who has served multiple terms as a senator. He was first elected in 2004 and re-elected in 2010 and 2019. Prior to his Senate career, he served as Governor of Pampanga from 1995 to 2004.",
    accomplishments:
      " Lapid has authored and sponsored various laws, including those focused on tourism and cooperatives. He is also known for his roles in Philippine cinema.",
    previousPosition: "Senator (2019–present)",
  },
  {
    id: 36,
    name: "Amirah Lidasan",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V2uc38JFwU0aJJ0GWCGoOjEcFPczxQoxoA&s",
    bio: "Amirah Ali Lidasan is a Filipino activist and politician, serving as the co-chairperson of the Sandugo Movement of Moro and Indigenous Peoples for Self-Determination. She has been involved in advocating for the rights of Moro and indigenous communities in the Philippines.",
    accomplishments:
      "Lidasan has worked extensively on issues related to human rights, self-determination, and social justice for marginalized communities.",
    previousPosition:
      "Co-chairperson of Sandugo Movement of Moro and Indigenous Peoples for Self-Determination",
  },
  {
    id: 37,
    name: "Rodante Marcoleta",
    party: "Independent",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Marcoleta-300w.png",
    bio: "Rodante D. Marcoleta is a Filipino politician who has served as the House representative for the SAGIP Partylist since 2016. He is known for his involvement in various legislative initiatives and congressional investigations.",
    accomplishments:
      "Marcoleta played a prominent role in the congressional hearings related to the franchise renewal of ABS-CBN. He has also authored and supported legislation on social services and public welfare.",
    previousPosition: "House Representative for SAGIP Partylist (2016–present)",
  },
  {
    id: 38,
    name: "Imee Marcos",
    party: "Nacionalista",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Governor_Imee_Marcos.jpg",
    bio: "Maria Imelda Josefa 'Imee' Romualdez Marcos is a Filipino politician and film producer, born on November 12, 1955, in Mandaluyong City, Philippines. She is the daughter of former President Ferdinand Marcos and former First Lady Imelda Marcos, and the sister of current President Bongbong Marcos. Imee Marcos has served as a Senator since 2019.",
    accomplishments:
      "As Governor of Ilocos Norte (2010–2019), she boosted local tourism. In the 19th Congress, she chairs Senate committees on Cooperatives, Electoral Reforms and People's Participation, Foreign Relations, and Social Justice, Welfare and Rural Development. In December 2022, she filed bills promoting the Philippines' pineapple, moringa, dragon fruit, and mango industries. In June 2023, she sought a Senate investigation into a U.S. request for the Philippines to temporarily house Afghan refugees, citing concerns over transparency and national security. In November 2023, she expressed support for former President Rodrigo Duterte and Vice President Sara Duterte regarding the issue of confidential funds and stated that the Philippines should not cooperate with the International Criminal Court, asserting it would 'cause great shame for the Filipinos.'",
    previousPosition: "Senator (2019–present)",
  },
  {
    id: 39,
    name: "Norman Marquez",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Marquez-300w.png",
    bio: "Norman Marquez is a Filipino ophthalmologist who ran as an independent candidate for Senator in the 2022 Philippine elections.",
    accomplishments:
      "As an eye specialist, he has contributed to the medical field, but specific legislative accomplishments are not documented.",
    previousPosition: "None",
  },
  {
    id: 40,
    name: "Eric Martinez",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Martinez-300w.png",
    bio: "Eric Martinez is a Filipino politician who has served as the Representative of Valenzuela City's 2nd district.",
    accomplishments:
      "He has been involved in legislative efforts related to sports and youth development.",
    previousPosition: "Representative of Valenzuela City's 2nd district",
  },
  {
    id: 41,
    name: "Richard Mata",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Mata-300w.png",
    bio: "Richard Mata is a Filipino medical doctor and health advocate known for his work in dengue awareness and prevention.",
    accomplishments:
      "He has been active in public health education focusing on dengue prevention.",
    previousPosition: "None",
  },
  {
    id: 42,
    name: "Sonny Matula",
    party: "WPP",
    alliance: "no alliance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVD7_xvkSFw5oc0mwLE_5sIwiTyX9rgkzDpQ&s",
    bio: "Atty. Jose Sonny G. Matula is a Filipino labor lawyer and activist, serving as the National President of the Federation of Free Workers (FFW).",
    accomplishments:
      "He has been a staunch advocate for labor rights and welfare. In the 2022 elections, he ran for Senator under the opposition coalition 1Sambayan but was not elected.",
    previousPosition: "Representative of Valenzuela City's 2nd district",
  },
  {
    id: 43,
    name: "Liza Maza",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://www.eaglenews.ph/wp-content/uploads/2018/08/Liza-Maza-380x280.jpg",
    bio: "Liza Lagorza Maza is a Filipina politician and activist known for her work in women's rights and social issues. She served as a member of the Philippine House of Representatives under the Gabriela Women's Party from 2004 to 2010 and was the lead convenor of the National Anti-Poverty Commission from 2016 until her resignation in 2018.",
    accomplishments:
      "Maza authored several significant laws, including the Anti-Violence Against Women and Children Act and the Magna Carta of Women. In 2024, she announced her intention to run for the Senate in the 2025 elections. On December 4, 2024, Maza and 74 others filed the second impeachment complaint against Vice President Sara Duterte, citing betrayal of public trust for alleged misuse of confidential funds.",
    previousPosition:
      "Lead Convenor of National Anti-Poverty Commission (2016–2018)",
  },
  {
    id: 44,
    name: "Heidi Mendoza",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Mendoza-300w.png",
    bio: "Heidi Reyes Lloce-Mendoza is a Filipina auditor, Certified Public Accountant, and former civil servant. She served as Under-Secretary-General of the United Nations Office of Internal Oversight Services from 2015 to 2019 and as Commissioner of the Commission on Audit from 2011 to 2015.",
    accomplishments:
      "Mendoza is recognized for her efforts in promoting transparency and accountability in government transactions. She played a key role in uncovering irregularities in public funds. In 2024, she announced her candidacy for the Senate in the 2025 elections, advocating for budget literacy and the abolition of pork barrel funds.",
    previousPosition:
      "Under-Secretary-General for the United Nations Office of Internal Oversight Services (2015–2019)",
  },
  {
    id: 45,
    name: "Jose Montemayor Jr.",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/wp-content/uploads/2024/10/Jose-Montemayor-Jr.jpeg",
    bio: "Dr. Jose Montemayor Jr. is a Filipino cardiologist and lawyer who ran for President in the 2022 Philippine elections.",
    accomplishments:
      "His campaign focused on health sector reforms and addressing the COVID-19 pandemic.",
    previousPosition: "None",
  },
  {
    id: 46,
    name: "Subair Mustapha",
    party: "WPP",
    alliance: "no alliance",
    image:
      "https://www.rappler.com/tachyon/2025/01/MUSTAPHA-SUBAIR.jpg?fit=300%2C300",
    bio: "Limited public information is available on Subair Mustapha.",
    accomplishments: "Unknown",
    previousPosition: "Unknown",
  },
  {
    id: 47,
    name: "Jose Olivar",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Olivar-300w.png",
    bio: "Jose Jessie Dela Calsada Olivar is a businessman and independent candidate running for senator in the 2025 Philippine elections.",
    accomplishments:
      "Participated in the Harapan sa Diliman - A Senatorial Forum, where he discussed issues related to women's rights, the youth, and the LGBTQI+ community.",
    previousPosition: "No previous government position",
  },
  {
    id: 48,
    name: "	Manny Pacquiao",
    party: "PFP",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pacquiao_and_Didal_%28cropped%29.jpg",
    bio: "Emmanuel 'Manny' Pacquiao is a former professional boxer, serving as a Senator of the Philippines from 2016 to 2022. He was an eight-division world champion before transitioning into politics.",
    accomplishments:
      "As Senator, he pushed for housing reforms and social welfare programs. He also ran for President in the 2022 elections but lost.",
    previousPosition: "Senator of the Philippines (2016–2022)",
  },
  {
    id: 49,
    name: "Francis Pangilinan",
    party: "Liberal",
    alliance: "Kibam",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Pangilinan-300w.png",
    bio: "Francis 'Kiko' Pangilinan is a Filipino lawyer and politician who served as Senator of the Philippines for multiple terms and was the running mate of Leni Robredo in the 2022 vice-presidential race.",
    accomplishments:
      "He advocated for agricultural reforms, youth development, and social justice programs.",
    previousPosition: "Senator of the Philippines (2001–2013, 2016–2022)",
  },
  {
    id: 50,
    name: "Ariel Querubin",
    party: "Nacionalista",
    alliance: "Riding-in-tandem Team",
    image:
      "https://www.rappler.com/tachyon/2025/01/QUERUBIN-ARIEL.jpg?fit=300%2C300",
    bio: "Ariel Querubin is a retired Marine colonel in the Philippine military. He was awarded the Medal of Valor for his bravery in combat.",
    accomplishments:
      "He played a role in military reform efforts and ran for Senate in the 2010 elections but was not elected.",
    previousPosition: "None",
  },
  {
    id: 51,
    name: "Apollo Quiboloy",
    party: "Independent",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://www.rappler.com/tachyon/2025/01/QUIBOLOY-APOLLO.jpg?fit=300%2C300",
    bio: "Apollo Carreon Quiboloy is a religious leader and founder of the Kingdom of Jesus Christ, a religious sect in the Philippines. He claims to be the 'Appointed Son of God' and has been involved in political discourse.",
    accomplishments:
      "He is known for endorsing political candidates, particularly Rodrigo Duterte.",
    previousPosition: "None",
  },
  {
    id: 52,
    name: "Danilo Ramos",
    party: "Makabayan",
    alliance: "Oposisyon ng Bayan",
    image:
      "https://www.rappler.com/tachyon/2025/01/RAMOS-DANILO.jpg?fit=300%2C300",
    bio: "Danilo 'Ka Daning' Ramos is a long-time peasant activist and the chairperson of Kilusang Magbubukid ng Pilipinas (KMP), the largest farmers' association in the Philippines.",
    accomplishments:
      "Advocated for genuine land reform, rural development, and farmers' welfare. Played a key role in challenging laws such as the Anti-Terrorism Law.",
    previousPosition: "Chairperson of Kilusang Magbubukid ng Pilipinas",
  },
  {
    id: 53,
    name: "Willie Revillame",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://filipinotimes.net/wp-content/uploads/2018/07/Screen-Shot-2018-07-19-at-4.18.28-PM-1.png",
    bio: "Willie Revillame is a Filipino television host, comedian, actor, and businessman. He is best known for hosting variety and game shows, particularly 'Wowowin'.",
    accomplishments:
      "He has significantly contributed to Philippine television entertainment and has been involved in philanthropy through his shows, providing financial aid to underprivileged Filipinos.",
    previousPosition: "None",
  },
  {
    id: 54,
    name: "Vic Rodriguez",
    party: "Independent",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Rodriguez-300w.png",
    bio: "Vic Rodriguez is a Filipino lawyer and political figure who served as the Executive Secretary of President Bongbong Marcos in 2022.",
    accomplishments:
      "He played a key role in Bongbong Marcos' presidential campaign and briefly served as Executive Secretary before resigning.",
    previousPosition:
      "Executive Secretary of the Philippines (June–September 2022)",
  },
  {
    id: 55,
    name: "Nur-Ana Sahidulla",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.rappler.com/tachyon/2025/01/SAHIDULLA-NUR-ANA.jpg?fit=300%2C300",
    bio: "Nur-Ana 'Lady Ann' Sahidulla is a Filipino politician from Mindanao. She has served as a representative of Sulu and was involved in regional development programs.",
    accomplishments:
      "She has worked on initiatives related to peace-building and local economic growth in Mindanao.",
    previousPosition: "Representative of Sulu (2007–2013)",
  },
  {
    id: 56,
    name: "Phillip Salvador",
    party: "PDP",
    alliance: "Partido Demokratiko Pilipino",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Salvador-300w.png",
    bio: "Phillip Salvador is a Filipino film and television actor known for his roles in action and drama films.",
    accomplishments:
      "He has received numerous acting awards for his performances in Philippine cinema.",
    previousPosition: "None",
  },
  {
    id: 57,
    name: "Tito Sotto",
    party: "NPC",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Sotto-300w.png",
    bio: "Vicente 'Tito' Sotto III is a Filipino politician, actor, and former Senate President. He has served multiple terms in the Philippine Senate.",
    accomplishments:
      "As Senate President, he played a crucial role in legislative measures on crime prevention, illegal drugs, and family rights.",
    previousPosition:
      "Senate President (2018–2022), Senator (1992–2004, 2010–2022)",
  },
  {
    id: 58,
    name: "Michael Tapado",
    party: "PM",
    alliance: "no alliance",
    image:
      "https://www.rappler.com/tachyon/2025/01/TAPADO-MICHAEL.jpg?fit=300%2C300",
    bio: "Michael Balais Tapado is a financial management consultant and the President & CEO of MBTapado Financial. He previously led the Ayala Alabang District Sales Office of Insular Life.",
    accomplishments:
      "Successfully led MBTapado Financial, providing financial management consulting services.",
    previousPosition: "President and CEO of MBTapado Financial",
  },
  {
    id: 59,
    name: "Ben Tulfo",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Tulfo-B-300w.png",
    bio: "Bienvenido 'Ben' Teshiba Tulfo is a Filipino television and radio personality, entrepreneur, and production company executive. He is known for hosting the investigative public service program 'BITAG.'",
    accomplishments:
      "Ben Tulfo has received numerous awards for his public service and investigative journalism through 'BITAG.' In October 2024, he filed his candidacy for the Philippine Senate as an independent candidate.",
    previousPosition: "CEO of Bitag Media Unlimited, Inc.",
  },
  {
    id: 60,
    name: "Erwin Tulfo",
    party: "Lakas",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Rep._Erwin_Tulfo_%2819th_Congress%29.jpg",
    bio: "Erwin Teshiba Tulfo is a Filipino news anchor, broadcaster, and columnist. He briefly served as the ad interim Secretary of Social Welfare and Development under President Bongbong Marcos.",
    accomplishments:
      "Erwin Tulfo is recognized for his blunt and fearless style of reporting in both radio and television. He led the Department of Social Welfare and Development (DSWD) from June 30, 2022, until his resignation on December 27, 2022. In January 2025, he announced his candidacy for the Philippine Senate.",
    previousPosition:
      "Secretary of Social Welfare and Development (June–December 2022)",
  },
  {
    id: 61,
    name: "Mar Valbuena",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.rappler.com/tachyon/2025/01/VALBUENA-MAR.jpg?fit=300%2C300",
    bio: "Mar Valbuena is the chairperson of Manibela, a public transport organization in the Philippines. He is an advocate for transport workers' rights and has led various protests concerning the Public Utility Vehicle Modernization Program.",
    accomplishments:
      "Valbuena has been at the forefront of efforts to address transportation challenges in the Philippines, representing the interests of jeepney drivers and operators. In October 2024, he filed his candidacy for the Philippine Senate, aiming to address issues surrounding public transportation.",
    previousPosition: "Chairperson of Manibela",
  },
  {
    id: 62,
    name: "Leandro Verceles Jr.",
    party: "Independent",
    alliance: "no alliance",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Verceles-300w.png",
    bio: "Mar Valbuena is the chairperson of Manibela, a public transport organization in the Philippines. He is an advocate for transport workers' rights and has led various protests concerning the Public Utility Vehicle Modernization Program.",
    accomplishments:
      "Valbuena has been at the forefront of efforts to address transportation challenges in the Philippines, representing the interests of jeepney drivers and operators. In October 2024, he filed his candidacy for the Philippine Senate, aiming to address issues surrounding public transportation.",
    previousPosition: "Chairperson of Manibela",
  },
  {
    id: 63,
    name: "Camille Villar",
    party: "Nacionalista",
    alliance: "Alyansa para sa Bagong Pilipinas",
    image:
      "https://www.inquirer.net/landing2017/voteph2025/sen-images-d/Villar-300w.png",
    bio: "Camille Lydia Aguilar Villar-Genuino is a Filipina entrepreneur and politician, currently serving as the Representative for Las Piñas City. She is the daughter of former Senate President Manny Villar and Senator Cynthia Villar.",
    accomplishments:
      "Camille Villar has held executive roles in various companies, including President and CEO of All Value and Director positions in Vista Land and Lifescapes Inc. and Golden MV Corp. In her political career, she has focused on livelihood and employment opportunities. In 2025, she ran for a Senate seat, emphasizing a 'fresh take' on addressing perennial problems of Filipinos.",
    previousPosition: "Representative for Las Piñas City (2019–present)",
  },
];

export default candidatesData;
