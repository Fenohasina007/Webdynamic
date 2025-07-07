import React, { useRef, useEffect, useState } from "react";
import { Container, Heading, Text, Stack, Flex, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const secondaryImages = [
	{
		src: require("../assets/images/sary/AGM_sary_4.jpg"),
		alt: "AGM Sary 4",
	},
	{
		src: require("../assets/images/sary/AGM_sary_3.jpg"),
		alt: "AGM Sary 3",
	},
	{
		src: require("../assets/images/sary/AGM_sary_2.jpg"),
		alt: "AGM Sary 2",
	},
	{
		src: require("../assets/images/sary/AGM_sary_5.jpg"),
		alt: "AGM Sary 5",
	},
	{
		src: require("../assets/images/sary/AGM_sary.jpg"),
		alt: "AGM Sary",
	},
];

export default function APropos() {
	const [current, setCurrent] = useState(0);
	const intervalRef = useRef();

	// Taille du schéma principal
	const mainImgSize = { base: "220px", sm: "320px", md: "400px", lg: "480px" };
	// Taille de l'image secondaire
	const imgSize = { base: "90px", sm: "120px", md: "140px", lg: "160px" };

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setCurrent((prev) => (prev + 1) % secondaryImages.length);
		}, 2200);
		return () => clearInterval(intervalRef.current);
	}, []);

	return (
		<Container maxW="6xl" py={10}>
			<Flex direction={{ base: "column", md: "row" }} align="center" justify="center" gap={10}>
				{/* Message à gauche */}
				<Box flex="1">
					<Stack spacing={6}>
						<Heading as="h1" size="xl" color="primary.700">
							À propos de l'association
						</Heading>
						<Text fontSize="lg" color="white">
							L'Association Géomatique Malagasy a pour mission de promouvoir la géomatique à Madagascar, de former les professionnels et d'accompagner les projets innovants dans ce domaine.
						</Text>
						<Text color="white">
							Nous réunissons des passionnés, étudiants, enseignants et experts pour partager les connaissances et développer des outils adaptés aux besoins locaux.
						</Text>
						{/* Images secondaires horizontales animées en dessous du texte */}
						<Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" gap={4} mt={4}>
							{secondaryImages.map((img, i) => (
								<Image
									key={img.alt}
									src={img.src}
									alt={img.alt}
									borderRadius="xl"
									boxShadow="0 4px 24px rgba(33,150,243,0.18)"
									border="4px solid"
									borderColor={i === current ? "#3dbbeb" : "#fff"}
									w={imgSize}
									h={imgSize}
									objectFit="cover"
									zIndex={i === current ? 10 : 1}
									style={{
										opacity: i === current ? 1 : 0.5,
										filter: i === current ? "drop-shadow(0 0 16px #3dbbeb)" : "none",
										transform: i === current ? "translateY(-10px) scale(1.08)" : "translateY(0) scale(1)",
										transition: "all 0.7s cubic-bezier(.4,2,.6,1)",
									}}
								/>
							))}
						</Box>
					</Stack>
				</Box>
				{/* Schéma principal centré et grand */}
				<Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center" minH={{ base: "300px", sm: "400px", md: "500px", lg: "500px" }}>
					<Image
						src={require("../assets/images/hero-bg.jpg")}
						alt="AGM Hero"
						borderRadius="2xl"
						boxShadow="0 8px 32px rgba(33,150,243,0.18)"
						w={mainImgSize}
						h={mainImgSize}
						objectFit="cover"
						zIndex={2}
						mb={6}
					/>
				</Box>
			</Flex>
		</Container>
	);
}
