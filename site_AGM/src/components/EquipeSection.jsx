import React from "react";
import { Box, Heading, Stack, Image, Text, Flex } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMastodon } from 'react-icons/si';
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

export default function EquipeSection({ hideTitleAndText = false }) {
	return (
		<Box as="section" id="equipe" py={10} px={4}>
			<Flex justify="center" align="center" gap={8} flexWrap="wrap">
				{equipe.map((membre, idx) => (
					<MotionBox
						key={membre.nom}
						bg="white"
						borderRadius="2xl"
						boxShadow="lg"
						p={6}
						textAlign="center"
						whileHover={{
							scale: 1.04,
							y: -8,
							transition: { duration: 0.3, ease: "easeOut" }
						}}
						style={{ cursor: "pointer", transition: "all 0.25s", minWidth: 240, maxWidth: 300 }}
					>
						<Image
							src={membre.image}
							alt={membre.nom}
							boxSize="120px"
							objectFit="cover"
							borderRadius="full"
							border="3px solid #1976d2"
							mb={4}
						/>
						<Stack spacing={1} textAlign="center">
							<Text fontWeight="bold" fontSize="lg" color="#222">
								{membre.nom}
							</Text>
							<Text fontWeight="semibold" color="#222" fontSize="sm">
								{membre.poste}
							</Text>
							{membre.description && (
								<Text color="#222">{membre.description}</Text>
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
					</MotionBox>
				))}
			</Flex>
		</Box>
	);
}
