import { FiShield, FiGitMerge, FiCloud, FiCrosshair, FiLock, FiCpu } from 'react-icons/fi'

// Clés utilisées par `expertise[].icon` dans portfolioData.js
export const EXPERTISE_ICONS = {
  shield: FiShield,
  git: FiGitMerge,
  cloud: FiCloud,
  target: FiCrosshair,
  lock: FiLock,
  cpu: FiCpu,
}

export const getExpertiseIcon = (key) => EXPERTISE_ICONS[key] ?? FiShield
