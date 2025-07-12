import React, { useState, useEffect } from "react";
import atrikasaImage from '../assets/sary_ilaina/sary.jpg';
import {
	Container,
	Heading,
	Text,
	Stack,
	Box,
	SimpleGrid,
	Icon,
} from "@chakra-ui/react";
import { FaBookOpen, FaBook, FaUsers, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const animatedMessages = [
	"Promouvoir la géomatique à Madagascar",
	"Innovation et partage des savoirs",
	"Former et accompagner la communauté",
];

function AnimatedText() {
	const [index, setIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setIndex((i) => (i + 1) % animatedMessages.length);
				setFade(true);
			}, 400);
		}, 2500);
		return () => clearInterval(interval);
	}, []);

	return (
		<Text
			fontSize={{ base: "lg", md: "2xl" }}
			fontWeight="bold"
			color="primary.700"
			textAlign="center"
			minH="2.5em"
			transition="opacity 0.4s"
			opacity={fade ? 1 : 0}
			mb={4}
			letterSpacing="wide"
		>
			{animatedMessages[index]}
		</Text>
	);
}

const activitesData = [
	{
		icon: FaBookOpen,
		titre: "Formations en géomatique",
		description:
			"Organiser des sessions de formation, des ateliers et des conférences pour renforcer les compétences en géomatiques. Promouvoir l'accès aux nouvelles technologies géospatiales.",
	},
	{
		icon: FaBook,
		titre: "Publications de recherches",
		description:
			"Apporter un soutien aux membres étudiants et chercheurs pour la publication de revues, d'articles et de travaux de recherche.",
	},
	{
		icon: FaUsers,
		titre: "Sensibilisation",
		description:
			"S'implique dans des initiatives de sensibilisation visant à accroître la compréhension du grand public quant à l'importance de la géomatique et à ses applications pratiques dans la vie quotidienne.",
	},
	{
		icon: FaGlobe,
		titre: "Collaboration",
		description:
			"Favoriser la collaboration avec d'autres organisations, institutions et partenaires nationaux et internationaux pour renforcer l'impact de la géomatique dans le développement durable de Madagascar.",
	},
];

export default function Activites() {
	const activites = activitesData;

	return (
		<Container maxW="6xl" py={10}>
			<Stack spacing={6}>
				<Heading as="h1" size="xl" color="primary.700" textAlign="center">
					Activités
				</Heading>
				<AnimatedText />
				<Text
					fontSize={{ base: "md", md: "lg" }}
					color="gray.700"
					textAlign="center"
					mb={10}
				>
					Découvrez les principales activités de l'Association des Géomaticiens Malagasy (AGM).
				</Text>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
					{activites.map((a, i) => (
						<MotionBox
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
							bg="white"
							boxShadow="2xl"
							borderRadius="2xl"
							p={7}
							textAlign="center"
							border="1px solid #e2e8f0"
							whileHover={{
								scale: 1.04,
								y: -8,
								transition: { duration: 0.3, ease: "easeOut" }
							}}
							style={{ cursor: "pointer", transition: "all 0.25s" }}
						>
							<Icon as={a.icon} w={12} h={12} color="primary.500" mb={4} />
							<Heading as="h3" size="md" color="primary.700" fontWeight="bold" mb={3}>
								{a.titre}
							</Heading>
							<Text color="gray.700" fontSize="md" mb={3}>
								{a.description}
							</Text>
						</MotionBox>
					))}
				</SimpleGrid>
			</Stack>
			{/* Grand fond décoratif en bas de page supprimé */}
		</Container>
	);
}
