import HeroRepository from '../repositories/heroRespository.js';
import HeroService from '../services/heroService.js';

const generateInstance = ({ filePath }) => {
  // hero gets all db connections
  const heroRepository = new HeroRepository({
    file: filePath,
  });

  const heroService = new HeroService({ heroRepository });

  return heroService;
};

export { generateInstance };
