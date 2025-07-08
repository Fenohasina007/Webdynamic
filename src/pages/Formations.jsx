import React from "react";
import { Container, Heading, Text, Stack, SimpleGrid } from "@chakra-ui/react";
import CardFormation from "../components/CardFormation";

const formations = [
	{
		titre: "SIG & Cartographie",
		description:
			"Initiation et perfectionnement aux Systèmes d'Information Géographique et à la cartographie numérique.",
	},
	{
		titre: "Télédétection",
		description:
			"Maîtrise des techniques de télédétection et d'analyse d'images satellites pour l'environnement et l'aménagement.",
	},
	{
		titre: "Programmation Python pour la géomatique",
		description:
			"Automatisation et analyse spatiale avec Python et les bibliothèques open source.",
	},
	{
		titre: "Base de données spatiales",
		description:
			"Conception, gestion et exploitation de bases de données géospatiales (PostGIS, QGIS, etc.).",
	},
];

export default function Formations() {
	return (
		<Container maxW="6xl" py={10}>
			<Stack spacing={6}>
				<Heading
					as="h1"
					size="xl"
					color="primary.700"
					textAlign="center"
				>
					Formations
				</Heading>
				<Text
					fontSize="lg"
					color="white"
					textAlign="center"
				>
					Découvrez nos formations en géomatique, SIG, télédétection, et bien plus
					encore. Nos programmes sont adaptés à tous les niveaux et animés par des
					experts du secteur.
				</Text>
				<SimpleGrid
					columns={{ base: 1, sm: 2, md: 4 }}
					spacing={6}
					mt={6}
				>
					{formations.map((f, idx) => (
						<CardFormation
							key={idx}
							titre={f.titre}
							description={f.description}
							delay={idx * 0.1}
						/>
					))}
				</SimpleGrid>
			</Stack>
		</Container>
	);
}
