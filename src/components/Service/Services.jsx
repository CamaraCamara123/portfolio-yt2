import React from "react";
import { MdDepartureBoard, MdDesignServices, MdDirectionsCar, MdElectricRickshaw } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Mes <span className="green">diplômes</span>
        </h4>
        <h1>Diplômes et Parcours</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Ingénerie Informatique"}
            annee={`2022-2023`}
            disc={`La 1 ère année de l'Ingénerie Informatique et Technologies Emmergentes (2ITE) à l'Ecole Nationale des Sciences
            Appliquées d'El Jadida (ENSAJ).`}
            link={`images/ensaj.png`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={FiCodesandbox}
            title={"Licence Génie Logiciel"}
            annee={`2021-2022`}
            disc={`Diplôme de Licence en Sciences Mathematiques et Informatique parcours Génie Logiciel obtenu à la Faculté des Sciences
             d'Agadir après 3 ans de formations.`}
            link={`images/Licence.jpg`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={MdElectricRickshaw}
            title={"DEUG SMI"}
            annee={`2020-2021`}
            disc={`Diplôme de DEUG Sciences Mathematiques et Informatique (SMI) obtenu à la faculté des Sciences d'Agadir après 2 ans de formations`}
            link={`images/deug.jpg`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"1 ère année SMI"}
            annee={`2019-2020`}
            disc={`J'ai intégré la premières années de Licence Science Mathematique et informatiques en 2019-2020 à la Faculté des Sciences d'Agadir
             à la suite de l'obtention d'une bourse de coopération de l'AMCI`}
             link={``}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={MdDepartureBoard}
            title={"1 ère année RTEL"}
            annee={`2018-2019`}
            disc={`J'ai intégré la premières années de Licence RTEL (Réseaux et Télécommunication) en 2019-2020 à l'ESATIC (Ecole Supérieure Africaine
             des TIC) la suite de l'obtention d'un concours juste après l'obtention de mon bac`}
             link={``}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={MdDirectionsCar}
            title={"Bac série C"}
            annee={`2017-2018`}
            disc={`J'ai intégré la premières années de Licence Science Mathematique et informatiques en 2019-2020 à la suite de l'obtention d'une
            bourse de coopération de l'AMCI (l'Agence de Marocaine de Coopération Internationale)`}
            link={`images/bac.jpg`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
