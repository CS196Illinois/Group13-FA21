from distance import UtilFunctions
import random

class Predator:
    def __init__(self, species, Energy, energyToBreed, energyToRun, travelSpeed, canavsSizeX, canavsSizeY):
        self.species = species
        self.energy = Energy
        self.energyToBreed = energyToBreed
        self.energyToRun = energyToRun
        self.runSpeed = travelSpeed
        litterSize = 3
        self.positionX = random.randint(0,canavsSizeX)
        self.positionY = random.randint(0,canavsSizeY)
        vision = 2

    def move(self, speed, time):
        distance = speed * time
        self.positionX += distance
        #self.energy -= 1
        
    # def run(self, speed, time):
    #     distance = speed *2 *time
    #     energy -= 4
    #     self.positionX += distance
        
    # def energyUpdate(self, preyConsumed):
    #     self.energy += (preyConsumed*5)

