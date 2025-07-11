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
import { motion, AnimatePresence } from "framer-motion";

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
					Découvrez les principales activités de l'Association des Géomaticiens
					Malagasy (AGM).
				</Text>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
					{activites.map((a, i) => (
						<MotionBox
							key={a.titre}
							bg="white"
							borderRadius="xl"
							boxShadow="md"
							p={7}
							textAlign="center"
							transition="all 0.2s"
							borderWidth="2px"
							borderColor="transparent"
							position="relative"
						>
							<Icon as={a.icon} w={12} h={12} color="primary.500" mb={4} />
							<Heading as="h3" size="md" color="primary.700" mb={3}>
								{a.titre}
							</Heading>
							<Text color="gray.600">{a.description}</Text>
							<Box
								className="card-underline"
								position="absolute"
								left="50%"
								bottom={3}
								transform="translateX(-50%)"
								w="60%"
								h="4px"
								borderRadius="full"
								bgGradient="linear(to-r, #3dbbeb, #113f87, #3dbbeb)"
								opacity={0}
								transition="opacity 0.3s, box-shadow 0.3s"
								_groupHover={{ opacity: 1, boxShadow: "0 0 16px 4px #3dbbeb" }}
								pointerEvents="none"
							/>
						</MotionBox>
					))}
				</SimpleGrid>
			</Stack>
		</Container>
	);
}
