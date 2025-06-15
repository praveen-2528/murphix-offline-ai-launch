import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(30px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-50px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(50px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'holographic-scan': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100%)',
						opacity: '0'
					}
				},
				'satellite-orbit-0': {
					'0%': {
						transform: 'rotate(0deg) translateX(200px) rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg) translateX(200px) rotate(-360deg)',
					}
				},
				'satellite-orbit-1': {
					'0%': {
						transform: 'rotate(0deg) translateX(250px) rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg) translateX(250px) rotate(-360deg)',
					}
				},
				'satellite-orbit-2': {
					'0%': {
						transform: 'rotate(0deg) translateX(300px) rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg) translateX(300px) rotate(-360deg)',
					}
				},
				'galaxy-glow': {
					'0%, 100%': {
						opacity: '0.2',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.4',
						transform: 'scale(1.1)'
					}
				},
				'event-horizon-glow': {
					'0%, 100%': {
						opacity: '0.8',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.9',
						transform: 'scale(1.02)'
					}
				},
				'photon-sphere': {
					'0%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '0.6'
					},
					'50%': {
						transform: 'scale(1.05) rotate(180deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1) rotate(360deg)',
						opacity: '0.6'
					}
				},
				'accretion-primary': {
					'0%': {
						transform: 'rotateX(75deg) rotateZ(0deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'rotateX(75deg) rotateZ(360deg)',
						opacity: '0.8'
					}
				},
				'accretion-secondary': {
					'0%': {
						transform: 'rotateX(75deg) rotateZ(0deg)',
						opacity: '0.6'
					},
					'100%': {
						transform: 'rotateX(75deg) rotateZ(-360deg)',
						opacity: '0.6'
					}
				},
				'accretion-outer': {
					'0%': {
						transform: 'rotateX(75deg) rotateZ(0deg)',
						opacity: '0.4'
					},
					'100%': {
						transform: 'rotateX(75deg) rotateZ(360deg)',
						opacity: '0.4'
					}
				},
				'lensing-ring': {
					'0%, 100%': {
						transform: 'rotateX(80deg) scale(1)',
						opacity: '0.2'
					},
					'50%': {
						transform: 'rotateX(80deg) scale(1.02)',
						opacity: '0.4'
					}
				},
				'stellar-jet-top': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'translateY(-200px) scaleY(1)'
					},
					'50%': {
						opacity: '0.6',
						transform: 'translateY(-200px) scaleY(1.1)'
					}
				},
				'stellar-jet-bottom': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'translateY(200px) scaleY(1)'
					},
					'50%': {
						opacity: '0.6',
						transform: 'translateY(200px) scaleY(1.1)'
					}
				},
				'stellar-orbit-0': {
					'0%': {
						transform: 'rotate(0deg) translateX(400px) rotate(0deg)',
						opacity: '0'
					},
					'10%, 90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(400px) rotate(-360deg)',
						opacity: '0'
					}
				},
				'stellar-orbit-1': {
					'0%': {
						transform: 'rotate(0deg) translateX(500px) rotate(0deg)',
						opacity: '0'
					},
					'10%, 90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(500px) rotate(-360deg)',
						opacity: '0'
					}
				},
				'stellar-orbit-2': {
					'0%': {
						transform: 'rotate(0deg) translateX(600px) rotate(0deg)',
						opacity: '0'
					},
					'10%, 90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(600px) rotate(-360deg)',
						opacity: '0'
					}
				},
				'doppler-shift': {
					'0%': {
						transform: 'rotateX(75deg) rotateZ(0deg)',
						filter: 'hue-rotate(0deg)'
					},
					'50%': {
						transform: 'rotateX(75deg) rotateZ(180deg)',
						filter: 'hue-rotate(180deg)'
					},
					'100%': {
						transform: 'rotateX(75deg) rotateZ(360deg)',
						filter: 'hue-rotate(360deg)'
					}
				},
				'spacetime-grid': {
					'0%, 100%': {
						opacity: '0.05',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.1',
						transform: 'scale(1.02)'
					}
				},
				'grid-warp': {
					'0%, 100%': {
						transform: 'skew(-2deg, 0deg) scale(1)',
						opacity: '0.3'
					},
					'50%': {
						transform: 'skew(-1deg, 0.5deg) scale(1.01)',
						opacity: '0.5'
					}
				},
				'cosmic-drift': {
					'0%': {
						transform: 'translateY(100vh) translateX(0px)',
						opacity: '0'
					},
					'10%, 90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100vh) translateX(100px)',
						opacity: '0'
					}
				},
				'cinematic-vignette': {
					'0%, 100%': {
						opacity: '0.8'
					},
					'50%': {
						opacity: '0.6'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'shimmer': 'shimmer 3s linear infinite',
				'holographic-scan': 'holographic-scan 4s ease-in-out infinite',
				'satellite-orbit-0': 'satellite-orbit-0 15s linear infinite',
				'satellite-orbit-1': 'satellite-orbit-1 20s linear infinite',
				'satellite-orbit-2': 'satellite-orbit-2 25s linear infinite',
				'galaxy-glow': 'galaxy-glow 8s ease-in-out infinite',
				'event-horizon-glow': 'event-horizon-glow 8s ease-in-out infinite',
				'photon-sphere': 'photon-sphere 12s ease-in-out infinite',
				'accretion-primary': 'accretion-primary 10s linear infinite',
				'accretion-secondary': 'accretion-secondary 15s linear infinite reverse',
				'accretion-outer': 'accretion-outer 20s linear infinite',
				'lensing-ring': 'lensing-ring 25s ease-in-out infinite',
				'stellar-jet-top': 'stellar-jet-top 6s ease-in-out infinite',
				'stellar-jet-bottom': 'stellar-jet-bottom 6s ease-in-out infinite',
				'stellar-orbit-0': 'stellar-orbit-0 15s linear infinite',
				'stellar-orbit-1': 'stellar-orbit-1 20s linear infinite',
				'stellar-orbit-2': 'stellar-orbit-2 25s linear infinite',
				'doppler-shift': 'doppler-shift 18s linear infinite',
				'spacetime-grid': 'spacetime-grid 15s ease-in-out infinite',
				'grid-warp': 'grid-warp 12s ease-in-out infinite',
				'cosmic-drift': 'cosmic-drift 80s linear infinite',
				'cinematic-vignette': 'cinematic-vignette 20s ease-in-out infinite'
			},
			backgroundSize: {
				'400%': '400% 400%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
