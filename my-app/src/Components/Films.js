import React from "react";
import Series from "./Movielist";
import { withRouter } from "react-router";
import "./styles.css";


const film = [
  {
    title: "Mixeur plongeant + batteur Russell Hobbs",
    id: "1",
    description:
      "Fiche Technique d’un mixeur : Couleur	Blanc/noir/gold/silver/rouge Matériau  Plastique Marque  Mix’n’mix Dimensions de l'article L x l x H    18 x 19 x 25 centimètres Puissance     650 Watts Poids de l'article 1.22 Kilogrammes  A propos :Wattag : 650. 0 Matérie : plastique 650 w. Protection anti-éclaboussure. Système de déverrouillage par bouton. Pied triangulaire spécial permettant d'obtenir une circulation optimale des ingrédients. Inclu : verre doseur, ensemble lames en s. 1 vitesse. Pied en métal. Garantie 2 ans 650 w. Protection anti-éclaboussure. Système de déverrouillage par bouton. Pied triangulaire spécial permettant d'obtenir une circulation optimale des ingrédients. Inclu : verre doseur, ensemble lames en s. 1 vitesse. Pied en métal",
    posterURL:
      "https://www.tunisianet.com.tn/131559-large/batteur-electrique-russell-hobbs-desire-rouge.jpg",
    rating: "94%",
    bandeannonce: "https://www.youtube.com/embed/8Mw7hKLk-zI",
    link:
      "https://viva.videofutur.fr/?program=provider%3dvideofutur%26titId%3d101468%26episodeNum%3d0%26vfDistributor%3dpepper-vod%26vfDevice%3d%7bvfDevice%7d%26vfProductId%3d%7bvfProductId%7d",
    type: "culte"
  },

  {
    title: "Toaster 2 Fentes Luna Stone",
    id: "2",
    description:
      "Toaster en acier inoxydable associé à une texture effet pierre naturelle,Fonction Lift and Look,Boutons lumineux bleus ",
    posterURL:
      "data:image/jpeg;base64,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",
    rating: "89%",
    bandeannonce: "https://www.youtube.com/embed/0a7HlMGxqcE",
    link:
      "https://www.primevideo.com/detail/amzn1.dv.gti.90b829f9-9fed-8cf1-5c5a-488be8231510?tag=alloprime-21",
    type: "action"
  },

  {
    title: "Poele anto-adhésif",
    id: "3",
    description:
      "Poêle TEFAL Induction - Diamètre: 20 cm - Matériau: Aluminium - Revêtement anti-adhésif à l'intérieur et à l'extérieur - Technologie Thermo-Signal - Durable et léger - Poignée Fixe",
    posterURL:
      "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/1/_/1_779.jpg",
    rating: "79 %",
    bandeannonce: "https://www.youtube.com/embed/JbGv_S-9uiM",
    link: "https://www.netflix.com/tn-fr/title/60004481?source=35",
    type: "action"
  },

  {
    title: "BATTEUR KENWOOD 300W",
    id: "4",
    description:
      "La gamme de casseroles et poêles Tefal Pro Inox présente tous les avantages de l'inox sans ses défauts.INNOVATION TEFAL : grâce à sa texture au fond de la poêle, la cuisson sur inox répond à toutes vos attentes : la viande est parfaitement saisie et lorsqu'elle est cuite, il est plus facile de la décoller grâce à cette technologie Techno-Dômes. Le jus ne s'échappe pas de la viande et celle-ci reste tendre à la dégustation.Un alliage 18/10 (18% de chrome, 10% de nickel) pour une haute résistance à la rouille et agressions du quotidien. Les casseroles et poêles de la gamme Tefal Pro Inox possèdent une poignée en silicone rivetée pour plus de confort et de sécurité. Cette poignée ne glisse pas et ne chauffe pas.Les casseroles de la gamme Pro Inox de Tefal sont graduées pour un dosage simple et intuitif. Les poêles et casseroles de cette gamme sont compatibles tous feux dont induction.",
    posterURL:
      "https://www.cdiscount.com/pdt2/4/9/9/1/550x550/ken5011423189499/rw/robot-patissier-kenwood-chef-xl-titanium-kvl8320s.jpg",
    rating: "95%",
    bandeannonce: "https://www.youtube.com/embed/Te2OVfUk8Xw",
    link:
      "https://vod.canalplus.com/cinema/la-ligne-verte/h/263330_40099?sc_openpartner=CNC",
    type: "culte"
  },

  {
    title: "MOULINEX Robot multifonction",
    id: "5",
    description:
      "e robot pâtissier Masterchef Gourmet vous aidera au quotidien pour préparer des pâtisseries maison en toute facilité et régaler votre famille et vos amis. Grâce à son kit de pâtisserie composé du fouet Flex breveté exclusif, d'un batteur et d'un pétrin en fonte, vous êtes sûr(e) de réussir à tous les coups ! Avec son moteur de 1100 W, 8 vitesses avec la fonction Pulse pour un mélange lisse et homogène, ainsi que son bol de 4,6 L, vous pouvez préparer jusqu'à 1,8 kg de pâte à gâteau, 10 blancs en neige et 800 g de pâte épaisse. Partez à la conquête de la pâtisserie grâce aux 7 accessoires fournis en option. En manque d'inspiration ? Pas de soucis grâce au livre de 25 recettes à télécharger sur le site web de Moulinex.",
    posterURL: "https://media.auchan.fr/MEDIASTEP69899152_512x512/B2CD/",
    rating: "93%",
    bandeannonce: "https://www.youtube.com/embed/ftcJK-YXo4k",
    link:
      "https://vod.canalplus.com/cinema/scarface/h/2064112_40099?sc_openpartner=CNC",
    type: "action"
  }
];



function Home() {

}
export default withRouter(Home);
export { film };
