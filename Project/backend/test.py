from prey import prey
from predator import Predator
from prey import Prey

class Program:
    def __init__(self, sPredator, sPrey, pPopulation, prPopulation):
        self.prey = Prey prey
        self.predator = Predator predator
        self.predatorPopulation = pPopulation
        self.preyPopulation = prPopulation
    
        
    def preyPopulate(prey):
        if(prey.energyToBreed > prey.energy):
            preyPopulation += prey.litterSize
            prey.energy -= prey.energyToBreed
    
    def predatorPopulate(predator):
        if(predator.energyToBreed > predator.energy):
            predatorPopulation += predator.litterSize
            predator.energy -= predator.energyToBreed

    

    

            