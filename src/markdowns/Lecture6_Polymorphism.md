**Polymorphism**

- `[poly][morph][ism]` => `[many][form][s]`
- better design
  - `Soldier`, `Ship`, `Horse` all inherit from the base class `Unit`

```java


	class Unit{
        public void upgradeToModernAge(){

        }

        public void addBetterArmor(){

        }
    }

    class Horse extends Unit{
        //example of overriding
        public void upgradeToModernAge(){

        }
        //example of overriding
        public void addBetterArmor(){

        }
    }

    //Solution using Polymorphism
    Class UpgradeUnits{
        public void upgradeUnitFromEnlightmentToModern(Unit u){
            //the reference u can be pointing to a horse, ship etc. (anything that extends Unit, or Unit itself)
            u.upgradeToModern();
            u.addBetterArmor();
            //if u is pointing to a hotse, then upgradeToModen on a horse object is called. etc.
        }
    }
    
```

- enables you to program in the general rather than program in the specific
- enables you to write programs that processes objects that share the same super class as if they are all objects of the super class
- easily extensible
- responsibility: `take a game unit and upgrade it from one Age to another more progressive Age`

Recap:

- in polymorphism, you have a base class reference pointing to an object of a subclass

- ```java
  SpaceObject x = newMartian();
  ```

**Downcasting**

- if a program needs to perform a subclass-specific operation on a subclass object referenced by a superclass variable, the program must fist cast the superclass reference to a subclass reference

```java
class Animal{
    public void makeItEat(){...};
    public void makeItMove(){...};
}
class Cat extends Animal{
    public void makeItPurr(){...};
}
class Dog extends Animal{
    public void makeItBark(){...};
}

public static void main(String[] args){
    Animal c = new Cat();
	c.makePurr(); // this is an error.
    //we MUST downcast it
    //the reference c (type Animal) does not support makePurr()
    
    ((Cat) c).makePurr(); //this is ok
    
    Animal d = new Dog();
    ((Dog) d).makeBark(); //this is ok
    
    ((Dog) c).makeBark(); //this is an error
    //type mismatch
}
```

**Function Binding**

- mapping from function call to function implemnetion

```java
public class Earthian extends SpaceObject{
    //function implementation
}

//function call
Earthian earthPerson = new Earthian();
earthPerson.draw();
```

1. Static Binding (compile time  binding or early binding)
   1. uses the type of the reference
      1. static functions
      2. private instance methods
      3. instance methods that are overloaded
      4. instance methods that are final
2. Dynamic Binding (Run time binding or late binding)
   1. uses the class of the object that is referred/pointed to (polymorphism)
   2. all instance methods except for
      1. private instance methods
      2. overloaded instance methods
      3. instance methods that are `final`
         1. `final methods`
            1. cannot be overridden in a subclass
            2. `private` and `static` methods implicitly `final`
         2. `final classes`
            1. cannot be extended by a subclass
            2. `final` implicitly `final`

**Interfaces**

Java supports only single inheritance and not multiple inheritance

```java
class HouseFly extends Insect{...}
class Telemarketer extends person{...}
```

clearly these classes have nothing in common in terms of direct inheritance

but they are both *annoying*

how can we use polymorphism when `HouseFly` and `Telemarketer` both inherit from different classes

```java
interface Pest{
    void beAnnoying();
}
```

```java
class HouseFly extends Insect implements Pest{
    ...
    public void beAnnoying(){
        ...
    }
}
class Telemarketer extends Person implements Pest{
    ...
    public void beAnnoying(){
        ...
    }
}
```

we now have two classes that can be annoying in their own way

they do not need to inherit from the same base class and share common inherent characteristics

**Abstract Classes**

- use the modifier abstract on a class header to declare an abstract class
- a placeholder in a class hierarchy that represents a generic concept

```java
public abstract class Vehicle{
    String name;
    public String getName(){
        return name; //method body
    }
    abstract public void move(); // no body
}
```

**Liskov Substitution Principle**

- for any important property of a `type`:
  - should also hold for its `subtypes`
  - so that any method for the `type` should work equally well on its `subtypes`
- behavior of [object] must be consistent with the behavior of [object]