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
				'nebula-drift-1': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.6'
					},
					'33%': {
						transform: 'translate(20px, -30px) scale(1.1)',
						opacity: '0.8'
					},
					'66%': {
						transform: 'translate(-15px, 25px) scale(0.9)',
						opacity: '0.7'
					}
				},
				'nebula-drift-2': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.5'
					},
					'50%': {
						transform: 'translate(-25px, 20px) scale(1.2)',
						opacity: '0.9'
					}
				},
				'nebula-drift-3': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.7'
					},
					'25%': {
						transform: 'translate(30px, 10px) scale(0.8)',
						opacity: '0.5'
					},
					'75%': {
						transform: 'translate(-20px, -15px) scale(1.1)',
						opacity: '0.8'
					}
				},
				'nebula-drift-4': {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
						opacity: '0.4'
					},
					'40%': {
						transform: 'translate(-35px, 30px) scale(1.3)',
						opacity: '0.7'
					},
					'80%': {
						transform: 'translate(25px, -20px) scale(0.9)',
						opacity: '0.6'
					}
				},
				'star-twinkle': {
					'0%, 100%': {
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'star-pulse': {
					'0%, 100%': {
						opacity: '0.2'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'shooting-star': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100px) translateY(100px)'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(100px) translateY(-100px)'
					}
				},
				'galaxy-rotation': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'cosmic-float': {
					'0%, 100%': {
						transform: 'translateY(0) translateX(0)',
						opacity: '0.1'
					},
					'25%': {
						transform: 'translateY(-20px) translateX(10px)',
						opacity: '0.3'
					},
					'50%': {
						transform: 'translateY(-10px) translateX(-15px)',
						opacity: '0.5'
					},
					'75%': {
						transform: 'translateY(-30px) translateX(20px)',
						opacity: '0.2'
					}
				},
				'energy-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '0.1'
					},
					'50%': {
						transform: 'scale(1.1)',
						opacity: '0.3'
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
				'nebula-drift-1': 'nebula-drift-1 25s ease-in-out infinite',
				'nebula-drift-2': 'nebula-drift-2 30s ease-in-out infinite',
				'nebula-drift-3': 'nebula-drift-3 35s ease-in-out infinite',
				'nebula-drift-4': 'nebula-drift-4 28s ease-in-out infinite',
				'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
				'star-pulse': 'star-pulse 4s ease-in-out infinite',
				'shooting-star': 'shooting-star 2s ease-out infinite',
				'galaxy-rotation': 'galaxy-rotation 50s linear infinite',
				'cosmic-float': 'cosmic-float 40s ease-in-out infinite',
				'energy-pulse': 'energy-pulse 6s ease-in-out infinite'
			},
			backgroundSize: {
				'400%': '400% 400%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
