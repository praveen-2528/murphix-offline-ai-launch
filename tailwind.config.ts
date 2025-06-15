
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
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'gentle-pulse': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.02)'
					}
				},
				'energy-wave': {
					'0%': {
						transform: 'scale(1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'scale(1.1)',
						opacity: '0.4'
					},
					'100%': {
						transform: 'scale(1.3)',
						opacity: '0'
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
				'black-hole-core': {
					'0%, 100%': {
						transform: 'scale(1) rotate(0deg)',
						boxShadow: '0 0 50px rgba(139, 69, 19, 0.8), inset 0 0 50px rgba(0, 0, 0, 1)'
					},
					'50%': {
						transform: 'scale(1.1) rotate(180deg)',
						boxShadow: '0 0 80px rgba(139, 69, 19, 0.9), inset 0 0 80px rgba(0, 0, 0, 1)'
					}
				},
				'event-horizon': {
					'0%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '0.6'
					},
					'100%': {
						transform: 'scale(1.2) rotate(360deg)',
						opacity: '0.3'
					}
				},
				'accretion-disk-1': {
					'0%': {
						transform: 'rotateX(75deg) rotateZ(0deg)',
						borderColor: 'rgba(251, 146, 60, 0.4)'
					},
					'100%': {
						transform: 'rotateX(75deg) rotateZ(360deg)',
						borderColor: 'rgba(251, 146, 60, 0.1)'
					}
				},
				'accretion-disk-2': {
					'0%': {
						transform: 'rotateX(75deg) rotateZ(0deg)',
						borderColor: 'rgba(96, 165, 250, 0.3)'
					},
					'100%': {
						transform: 'rotateX(75deg) rotateZ(-360deg)',
						borderColor: 'rgba(96, 165, 250, 0.1)'
					}
				},
				'accretion-disk-3': {
					'0%': {
						transform: 'rotateX(75deg) rotateZ(0deg)',
						borderColor: 'rgba(45, 212, 191, 0.2)'
					},
					'100%': {
						transform: 'rotateX(75deg) rotateZ(360deg)',
						borderColor: 'rgba(45, 212, 191, 0.05)'
					}
				},
				'stellar-orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(200px) rotate(0deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(200px) rotate(-360deg)',
						opacity: '0'
					}
				},
				'lensing-effect': {
					'0%, 100%': {
						opacity: '0.3'
					},
					'50%': {
						opacity: '0.1'
					}
				},
				'space-dust': {
					'0%': {
						transform: 'translateY(100vh) translateX(0)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100vh) translateX(50px)',
						opacity: '0'
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
				'quantum-flicker': {
					'0%, 100%': {
						opacity: '1',
						filter: 'blur(0px)'
					},
					'50%': {
						opacity: '0.7',
						filter: 'blur(0.5px)'
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
				'float': 'float 3s ease-in-out infinite',
				'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
				'energy-wave': 'energy-wave 2s ease-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'black-hole-core': 'black-hole-core 20s ease-in-out infinite',
				'event-horizon': 'event-horizon 15s linear infinite',
				'accretion-disk-1': 'accretion-disk-1 8s linear infinite',
				'accretion-disk-2': 'accretion-disk-2 12s linear infinite reverse',
				'accretion-disk-3': 'accretion-disk-3 16s linear infinite',
				'stellar-orbit': 'stellar-orbit 40s linear infinite',
				'lensing-effect': 'lensing-effect 10s ease-in-out infinite',
				'space-dust': 'space-dust 60s linear infinite',
				'holographic-scan': 'holographic-scan 3s ease-in-out infinite',
				'quantum-flicker': 'quantum-flicker 2s ease-in-out infinite'
			},
			backgroundSize: {
				'400%': '400% 400%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
