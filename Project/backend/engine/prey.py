from distance import UtilFunctions
import random

class Prey:
    def __init__(self, species, Energy, energyToBreed, energyToRun, runSpeed, canavsSizeX, canavsSizeY):
        self.species = species
        self.energy = Energy
        self.energyToBreed = energyToBreed
        self.energyToRun = energyToRun
        self.runSpeed = runSpeed
        litterSize = 24
        self.positionX = random.randint(0,canavsSizeX)
        self.positionY = random.randint(0,canavsSizeY)
        vision = 1

    def move(self, speed, time):
        distance = speed * time
        self.positionX += distance
        
        
    # def run(self, speed , time):
    #     if (energy > 0):
    #         distance = speed *2 *time
    #         self.positionX += distance
    #         self.energy -= 3
    #     else:
    #         distance = move(speed, time)
    #         self.positionX += distance

    
    # def energyUpdate(grassConsumed):
    #     self.energy += (grassConsumed*3)
    
