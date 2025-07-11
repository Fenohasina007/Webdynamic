import React from "react";
import { Box, Heading, Text, Stack, SimpleGrid } from "@chakra-ui/react";
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
		<Box py={10} px={2}>
			<Stack spacing={6}>
				<Heading
					as="h1"
					size="xl"
					color="#1976d2"
					textAlign="center"
					fontWeight="bold"
					letterSpacing="wide"
					mb={2}
				>
					Formations
				</Heading>
				<Text
					fontSize={{ base: "md", md: "lg" }}
					color="#222"
					borderRadius="md"
					px={4}
					py={3}
					textAlign="center"
					mb={6}
					bg="transparent"
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
		</Box>
	);
}
