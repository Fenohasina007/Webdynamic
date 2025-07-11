import React from "react";
import { Box, Container, Heading, Text, Stack, Flex, SimpleGrid } from "@chakra-ui/react";
import EquipeSection from "../components/EquipeSection";

const objectifs = [
	{
		numero: "01",
		texte: "Promouvoir et développer les compétences en géomatique",
	},
	{
		numero: "02",
		texte: "Faciliter l’échange et le partage parmi les experts de la géomatique",
	},
	{
		numero: "03",
		texte: "Contribuer au développement de la géomatique et des technologies associées",
	},
];

export default function APropos() {
	return (
		<Box bg="transparent" minH="100vh" pt={8}>
			{/* Présentation */}
			<Container maxW="6xl" py={8}>
				<Stack spacing={6} align="center" mb={8}>
					<Box className="section-title" textAlign="center">
						<Text
							as="span"
							color="#1976d2"
							fontWeight="bold"
							fontSize="xl"
							letterSpacing="wide"
						>

						</Text>
						<Heading as="h2" size="2xl" color="#1976d2" mt={2} mb={2}>
							Présentation
						</Heading>
					</Box>
					<Heading as="h3" size="lg" color="#1976d2" textAlign="center">
						L’Association des Géomaticiens Malagasy (AGM)
					</Heading>
					<Text
						color="#222"
						fontSize={{ base: "md", md: "lg" }}
						textAlign="center"
						maxW="3xl"
					>
						C'est une organisation à but non lucratif, apolitique, dynamique et
						engagée fondée avec la vision de créer une communauté professionnelle
						forte et compétente dans le domaine de la géomatique. Elle a pour
						objectif principal d’appuyer au développement considérable des
						géomatiques à Madagascar.
					</Text>
					<Heading as="h2" size="2xl" color="#1976d2" textAlign="center" mt={2}>
						Notre Mission
					</Heading>
					<Text
						color="#222"
						fontSize={{ base: "md", md: "lg" }}
						textAlign="center"
						maxW="3xl"
					>
						L'AGM a pour mission de favoriser l'échange de compétences, le partage
						d'expériences et la collaboration entre les professionnels et les
						experts de la géomatique à Madagascar. Nous nous engageons à promouvoir
						l'utilisation responsable des technologies géospatiales pour résoudre des
						problèmes complexes, que ce soit dans la gestion des ressources
						naturelles, de l'aménagement du territoire, de l’environnement, de
						l’agriculture, de la cartographie, de la télédétection, ou d'autres
						domaines d’applications liées à la géomatique
					</Text>
				</Stack>
				{/* Slide équipe à la place de l'image AGM */}
				<EquipeSection hideTitleAndText={true} />
			</Container>
			{/* Objectifs en cards */}
			<Box py={10} bg="transparent">
				<Container maxW="6xl">
					<Box className="section-title" textAlign="center" mb={8}>
						<Text
							as="span"
							color="#1976d2"
							fontWeight="bold"
							fontSize="xl"
							letterSpacing="wide"
						>
		
						</Text>
						<Heading as="h2" size="xl" color="#1976d2" mt={2}>
							Notre objectifs
						</Heading>
					</Box>
					<SimpleGrid
						columns={{ base: 1, md: 3 }}
						spacing={8}
					>
						{objectifs.map((obj) => (
							<Box
								key={obj.numero}
								bg="#fff"
								borderRadius="2xl"
								boxShadow="lg"
								p={8}
								textAlign="center"
								_hover={{
									boxShadow: "2xl",
									transform: "translateY(-6px) scale(1.03)",
								}}
								transition="all 0.3s"
							>
								<Text
									fontSize="3xl"
									color="#1976d2"
									fontWeight="bold"
									mb={2}
								>
									{obj.numero}
								</Text>
								<Text fontSize="lg" color="#222">
									{obj.texte}
								</Text>
							</Box>
						))}
					</SimpleGrid>
				</Container>
			</Box>
		</Box>
	);
}
