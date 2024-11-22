import { useState } from "react";

import gerald from "./assets/imgs/gerald.jpeg";
import valerie from "./assets/imgs/valerie.jpg";
import otis from "./assets/imgs/otis.jpeg";
import mark from "./assets/imgs/mark.jpg";
import philip from "./assets/imgs/philip.jpg";

import heart from "./assets/imgs/heart.png";
import nasa from "./assets/imgs/nasa.svg";
import threedicon from "./assets/imgs/3dicon.png";
import pasemaker from "./assets/imgs/pasemaker.png";
import gaming from "./assets/imgs/gaming.png";
import arcade from "./assets/imgs/arcade.png";
import presentation from "./assets/imgs/presentation.png";
import printer from "./assets/imgs/printer.png";
import bussines from "./assets/imgs/bussines.png";
import ibm from "./assets/imgs/ibm.png";

import "./App.css";

import Cards from "./components/Cards/Cards";
import Page from "./components/Page/Page";

function App() {
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const persons = [
    {
      name: "Otis Boykin",
      subtitle: "Engenheiro eletrônico e inventor",
      description:
        "O engenheiro eletrônico e inventor norte-americano Otis Boykin fez a diferença no setor da saúde, tendo em vista que foi responsável – e muito reconhecido – por aprimorar o marca-passo (aquele dispositivo de aplicação médica que tem o objetivo de regular os batimentos cardíacos), adicionando um controle eletrônico ao mecanismo, e é possível perceber que essa inovação salva vidas até hoje. Otis Boykin também é conhecido pelo fato de que, em 1961, patenteou um resistor elétrico capaz de suportar grandes mudanças de temperatura e pressão, peça que chegou até mesmo a ser utilizada pelo próprio Exército norte-americano.",
      img: otis,
      icons: [heart, pasemaker],
    },
    {
      name: "Phillip Emeagwali",
      subtitle: "Mestre e doutor em computação cintífica",
      description:
        "O nigeriano Philip Emeagwali obteve um bacharelado em matemática e três outros diplomas: um doutorado em computação científica pela Universidade de Michigan e dois mestrados pela Universidade George Washington. Ele ficou conhecido na tecnologia por usar 65 mil processadores para inventar o computador mais rápido do mundo, que realiza 3,1 bilhões de cálculos por segundo. Ele foi eleito o 35º maior africano (e o maior cientista africano) de todos os tempos em uma pesquisa da revista New African. Seus registros foram citados em um discurso de Bill Clinton como um exemplo do que os nigerianos poderiam alcançar quando tivessem oportunidade.",
      img: philip,
      icons: [presentation, bussines],
    },
    {
      name: "Mark Dean",
      subtitle: "Engenheiro da computação e inventor",
      description:
        "O Mark Dean é engenheiro da computação e também um inventor. Sabe o que ele fez? Ele criou a Industry Standard Architecture (ISA), que é o sistema que possibilita que periféricos como modens e impressoras se conectem aos computadores. E não para por aí, ele também fez parte da equipe de engenheiros da IBM que criou o primeiro computador pessoal da empresa.",
      img: mark,
      icons: [ibm, printer],
    },
    {
      name: "Gerald Lawson",
      subtitle: "Engenheiro eletrônico",
      description:
        "Pausar uma partida de videogame pode ser uma tarefa muito simples e banal atualmente, mas isso não existia nos primeiros consoles. Se hoje em dia os gamers de plantão apertam o “pause” sem a preocupação de perder o jogo, podem agradecer ao engenheiro eletrônico norte-americano Gerald A. Lawson (que atendia também por Jerry Lawson). A invenção mais importante de Lawson, no entanto, foi o Fairchild Channel F, um sistema de videogame baseado em cartucho. Apesar de sua indiscutível importância para a indústria do videogame, Lawson acabou não ficando verdadeiramente conhecido. Ele também era um dos pouquíssimos negros do ramo, em um período (década de 1970) em que o racismo era muito mais presente na sociedade. Sendo assim, o engenheiro precisou enfrentar muitas barreiras. Lawson fundou sua própria empresa, a VideoSoft, que produzia cartuchos para o Atari 2600.",
      img: gerald,
      icons: [arcade, gaming],
    },
    {
      name: "Valerie Thomas",
      subtitle: "Física e analista de dados da NASA",
      description:
        "Valerie simplesmente era física e analista de dados da NASA e não bastasse isso, ela é simplesmente a inventora da tecnologia 3D. Foi uma das responsáveis por gerenciar o projeto Landsat que tinha como objetivo obter imagens de satélite do nosso planeta. Foram seus estudos sobre espelhos côncavos que a levaram a criar o 3D. Então se você pode ir no cinema e ter uma verdadeira experiência, agradeça a Valerie.",
      img: valerie,
      icons: [nasa, threedicon],
    },
  ];

  const openPage = (person) => {
    setSelectedPerson(person);
    setIsPageOpen(true);
  };

  const closePage = () => {
    setIsPageOpen(false);
  };

  return (
    <main className="app-main">
      <h1 className="app-title">
        Pessoas negras na <span className="app-span">Computação</span>
      </h1>
      <div className="wrapper">
        {persons.map((person, index) => (
          <Cards key={index} person={person} onClick={() => openPage(person)} />
        ))}
      </div>
      {isPageOpen && <Page person={selectedPerson} onClose={closePage} />}
    </main>
  );
}

export default App;
