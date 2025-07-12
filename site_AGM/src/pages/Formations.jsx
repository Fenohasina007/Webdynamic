import React from "react";
import { Box, Heading, Text, Stack, SimpleGrid, Button } from "@chakra-ui/react";
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
		<Box minH="100vh" bg="#f7f7f7">
			{/* En-tête style EMIT */}
			<Box
				bg="#1976d2"
				py={{ base: 10, md: 16 }}
				px={4}
				textAlign="center"
				position="relative"
				overflow="hidden"
			>
				<Box
					position="absolute"
					top={0}
					left={0}
					w="100%"
					h="100%"
					zIndex={0}
					backgroundImage={`url(${require('../assets/sary_atao_fond/FOND_dans_Formations.jpg')})`}
					backgroundPosition="center"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
					opacity={0.18}
				/>
				<Heading
					as="h1"
					size="2xl"
					color="white"
					fontWeight="extrabold"
					mb={4}
					letterSpacing="wide"
					position="relative"
					zIndex={1}
				>
					Nos Formations
				</Heading>
				<Text
					fontSize={{ base: "lg", md: "2xl" }}
					color="white"
					maxW="3xl"
					mx="auto"
					position="relative"
					zIndex={1}
				>
					Découvrez nos formations en géomatique, SIG, télédétection, et bien plus
					encore. Nos programmes sont adaptés à tous les niveaux et animés par des
					experts du secteur.
				</Text>
			</Box>
			{/* Grille de formations */}
			<Box maxW="7xl" mx="auto" py={12} px={4}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
					{formations.map((f, idx) => (
						<Box
							key={idx}
							bg="white"
							borderRadius="2xl"
							boxShadow="lg"
							p={8}
							textAlign="center"
							transition="all 0.3s"
							_hover={{
								boxShadow: "2xl",
								transform: "translateY(-6px) scale(1.03)",
							}}
						>
							<Heading
								as="h3"
								size="md"
								color="#1976d2"
								fontWeight="bold"
								mb={3}
							>
								{f.titre}
							</Heading>
							<Text color="#222" fontSize="md" mb={5}>
								{f.description}
							</Text>
							<Button
								colorScheme="blue"
								bg="#1976d2"
								color="white"
								borderRadius="full"
								px={8}
								fontWeight="bold"
								_hover={{ bg: "#1251a3" }}
							>
								En savoir plus
							</Button>
						</Box>
					))}
				</SimpleGrid>
			</Box>
		</Box>
	);
}
