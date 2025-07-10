import React from "react";
import { Box, Heading, SimpleGrid, Stack, Image, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const equipe = [
	{
		nom: "Mr HAJALALAINA Aimé Richard",
		poste: "Président du Conseil d'Administration",
		description: "",
		image: require("../assets/images/team-1.jpg"),
	},
	{
		nom: "Mr RAZAFINIMARO Tsimiala Toky Arisetra Eddy",
		poste: "Président AGM",
		description: "",
		image: require("../assets/images/team-2.jpg"),
	},
	{
		nom: "Mlle RAMIANDRISOA Marie Laryssa",
		poste: "Responsable du développement de Partenariats",
		description: "",
		image: require("../assets/images/team-3.jpg"),
	},
];

const MotionBox = motion(Box);

export default function EquipeSection() {
	return (
		<Box
			as="section"
			id="equipe"
			minH="100vh"
			py={100}
			px={4}
		>
			<Heading
				as="h2"
				size="lg"
				mb={6}
				color="primary.700"
				textAlign="center"
			>
				L'équipe AGM
			</Heading>
			<Text
				mb={8}
				color="primary.700"
				fontSize={{ base: "md", md: "lg" }}
				textAlign="center"
			>
				L'Association Géomatique Malagasy a pour mission de promouvoir la
				géomatique à Madagascar, de former les professionnels et d'accompagner
				les projets innovants dans ce domaine.
				<br />
				<br />
				Nous réunissons des passionnés, étudiants, enseignants et experts pour
				partager les connaissances et développer des outils adaptés aux besoins
				locaux.
			</Text>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
				{equipe.map((membre, i) => (
					<MotionBox
						key={i}
						bg="white"
						borderRadius="xl"
						boxShadow="0 4px 24px rgba(33,150,243,0.10)"
						borderWidth={0}
						borderColor="transparent"
						p={6}
						display="flex"
						flexDirection="column"
						alignItems="center"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
						whileHover={{
							scale: 1.04,
							boxShadow: "0 8px 32px rgba(33,150,243,0.18)",
						}}
						cursor="pointer"
					>
						<Image
							src={membre.image}
							alt={membre.nom}
							boxSize="110px"
							objectFit="cover"
							borderRadius="full"
							border="3px solid"
							borderColor="primary.400"
							mb={4}
						/>
						<Stack spacing={1} textAlign="center">
							<Text
								fontWeight="bold"
								fontSize="lg"
								color="primary.700"
							>
								{membre.nom}
							</Text>
							<Text
								fontWeight="semibold"
								color="primary.500"
								fontSize="sm"
							>
								{membre.poste}
							</Text>
							{membre.description && (
								<Text color="gray.500">{membre.description}</Text>
							)}
						</Stack>
					</MotionBox>
				))}
			</SimpleGrid>
		</Box>
	);
}
