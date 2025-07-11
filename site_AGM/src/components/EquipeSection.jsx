import React, { useState, useEffect } from "react";
import { Box, Heading, Stack, Image, Text, Flex } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMastodon } from 'react-icons/si';

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

export default function EquipeSection({ hideTitleAndText = false }) {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % equipe.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const prevIdx = (index - 1 + equipe.length) % equipe.length;
	const nextIdx = (index + 1) % equipe.length;

	return (
		<Box
			as="section"
			id="equipe"
			minH="60vh"
			py={10}
			px={4}
		>
			<Flex justify="center" align="center" position="relative" minH="320px" gap={4}>
				{/* Image précédente (floue, petite) */}
				<Box
					flexShrink={0}
					opacity={0.5}
					filter="blur(3px)"
					transform="scale(0.8)"
					transition="all 0.6s cubic-bezier(.4,2,.6,1)"
					zIndex={1}
				>
					<Image
						src={equipe[prevIdx].image}
						alt={equipe[prevIdx].nom}
						boxSize="100px"
						objectFit="cover"
						borderRadius="full"
						border="2px solid #1976d2"
						mb={2}
					/>
				</Box>
				{/* Image centrale (en avant) */}
				<Box
					flexShrink={0}
					boxShadow="0 8px 32px rgba(33,150,243,0.18)"
					borderRadius="2xl"
					bg="white"
					p={6}
					zIndex={2}
					transition="all 0.6s cubic-bezier(.4,2,.6,1)"
				>
					<Image
						src={equipe[index].image}
						alt={equipe[index].nom}
						boxSize="120px"
						objectFit="cover"
						borderRadius="full"
						border="3px solid #1976d2"
						mb={4}
					/>
					<Stack spacing={1} textAlign="center">
						<Text fontWeight="bold" fontSize="lg" color="primary.700">
							{equipe[index].nom}
						</Text>
						<Text fontWeight="semibold" color="#1976d2" fontSize="sm">
							{equipe[index].poste}
						</Text>
						{equipe[index].description && (
							<Text color="gray.500">{equipe[index].description}</Text>
						)}
						<Flex justify="center" gap={3} mt={3}>
							<a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
								<FaFacebook size={22} color="#1976d2" style={{ cursor: 'pointer' }} />
							</a>
							<a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
								<FaLinkedin size={22} color="#1976d2" style={{ cursor: 'pointer' }} />
							</a>
							<a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
								<FaGithub size={22} color="#1976d2" style={{ cursor: 'pointer' }} />
							</a>
							<a href="#" target="_blank" rel="noopener noreferrer" aria-label="Mastodon">
								<SiMastodon size={22} color="#1976d2" style={{ cursor: 'pointer' }} />
							</a>
						</Flex>
					</Stack>
				</Box>
				{/* Image suivante (floue, petite) */}
				<Box
					flexShrink={0}
					opacity={0.5}
					filter="blur(3px)"
					transform="scale(0.8)"
					transition="all 0.6s cubic-bezier(.4,2,.6,1)"
					zIndex={1}
				>
					<Image
						src={equipe[nextIdx].image}
						alt={equipe[nextIdx].nom}
						boxSize="100px"
						objectFit="cover"
						borderRadius="full"
						border="2px solid #1976d2"
						mb={2}
					/>
				</Box>
			</Flex>
		</Box>
	);
}
