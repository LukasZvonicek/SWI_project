# Použij oficiální OpenJDK image jako základ
FROM openjdk:17-jdk-slim

# Nastav pracovní adresář v kontejneru
WORKDIR /app

# Zkopíruj Maven Wrapper a potřebné soubory
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Nainstaluj Maven a sestav aplikaci
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Spusť jar soubor
CMD ["java", "-jar", "target/Projekt-0.0.1-SNAPSHOT.jar"]
