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
				<Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" gap={8}>
					<Stack spacing={6} align="flex-start" mb={8} flex="2">
						<Box className="section-title" textAlign="center" w="100%">
							<Text
								as="span"
								color="#1976d2"
								fontWeight="bold"
								fontSize="xl"
								letterSpacing="wide"
							>

							</Text>
							<Heading as="h2" size="3xl" color="#1976d2" mt={2} mb={2} textAlign="center">
								Présentation
							</Heading>
						</Box>
						<Heading as="h3" size="xl" color="#1976d2" textAlign="center" w="100%">
							L’Association des Géomaticiens Malagasy (AGM)
						</Heading>
						<Text
							color="#222"
							fontSize={{ base: "md", md: "lg" }}
							textAlign="left"
							maxW="3xl"
						>
							C'est une organisation à but non lucratif, apolitique, dynamique et engagée fondée avec la vision de créer une communauté professionnelle forte et compétente dans le domaine de la géomatique. Elle a pour objectif principal d’appuyer au développement considérable des géomatiques à Madagascar.
						</Text>
						<Heading as="h2" size="3xl" color="#1976d2" textAlign="center" mt={2} w="100%">
							Notre Mission
						</Heading>
						<Text
							color="#222"
							fontSize={{ base: "md", md: "lg" }}
							textAlign="left"
							maxW="3xl"
						>
							L'AGM a pour mission de favoriser l'échange de compétences, le partage d'expériences et la collaboration entre les professionnels et les experts de la géomatique à Madagascar. Nous nous engageons à promouvoir l'utilisation responsable des technologies géospatiales pour résoudre des problèmes complexes, que ce soit dans la gestion des ressources naturelles, de l'aménagement du territoire, de l’environnement, de l’agriculture, de la cartographie, de la télédétection, ou d'autres domaines d’applications liées à la géomatique
						</Text>
					</Stack>
					<Box flex="1" display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent="center" minH={{ md: '420px', lg: '520px' }}>
						<img
							src={require('../assets/images/AGM.jpg')}
							alt="AGM"
							style={{ width: '100%', maxWidth: 600, height: 'auto', borderRadius: '2em', boxShadow: '0 8px 32px rgba(33,150,243,0.18)', objectFit: 'cover' }}
						/>
					</Box>
				</Flex>
			</Container>
			{/* Slide équipe à la place de l'image AGM */}
			<EquipeSection hideTitleAndText={true} />
			{/* Objectifs en cards juste après l'équipe */}
			<Box py={6} bg="transparent">
				<Container maxW="6xl">
					<Box className="section-title" textAlign="center" mb={8}>
						<Heading as="h2" size="xl" color="#1976d2" mt={2}>
							Notre objectifs
						</Heading>
					</Box>
					<SimpleGrid
						columns={{ base: 1, md: 3 }}
						spacing={8}
					>
						{objectifs.map((obj, idx) => {
							const images = [
								require('../assets/sary_ilaina/sary.jpg'),
								require('../assets/sary_ilaina/sary1.jpg'),
								require('../assets/sary_ilaina/sary2.jpg'),
							];
							return (
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
									display="flex"
									flexDirection="column"
									alignItems="center"
								>
									<img
										src={images[idx % images.length]}
										alt={obj.numero}
										style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '1em', marginBottom: 16 }}
									/>
									<Text
										fontSize="3xl"
										color="#1976d2"
										fontWeight="bold"
										mb={2}
									>
										{obj.numero}
									</Text>
									<Text fontSize="lg" color="rgba(34,34,34,0.85)" fontWeight="normal" mt={4}>
										{obj.texte}
									</Text>
								</Box>
							);
						})}
					</SimpleGrid>
				</Container>
			</Box>
		</Box>
	);
}
