from prey import prey
from predator import predator
from prey import prey

class program:
    def __intit__(self, sPredator, sPrey, pPopulation, prPopulation):
        self.prey = prey
        self.predator = predator
        self.predatorPopulation = pPopulation
        self.preyPopulation = prPopulation
    
        
    def preyPopulate(prey):
        if(prey.energyToBreed > prey.energy):
            program.preyPopulation += prey.litterSize
            prey.energy -= prey.energyToBreed
    
    def predatorPopulate(predator):
        if(predator.energyToBreed > predator.energy):
            program.predatorPopulation += predator.litterSize
            predator.energy -= predator.energyToBreed

    

    

            