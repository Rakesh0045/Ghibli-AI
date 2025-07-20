# ---------- Build Stage ----------
# Use Maven with Java 17 to compile the project
FROM maven:3.9.8-eclipse-temurin-17 AS build

# Set working directory inside the container
WORKDIR /app

# Copy pom.xml and download dependencies (caching benefit)
COPY pom.xml .

RUN mvn dependency:go-offline

# Now copy the rest of the project files
COPY src ./src

# Build the Spring Boot app (skip tests to speed up)
RUN mvn clean package -DskipTests


# ---------- Runtime Stage ----------
# Use lightweight Java 17 image to run the app
FROM eclipse-temurin:17-jdk-alpine

# Set working directory inside the runtime container
WORKDIR /app

# Copy the built jar from the previous stage
COPY --from=build /app/target/ghibliapi-0.0.1-SNAPSHOT.jar .

# Expose the port your app listens on
EXPOSE 1205

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "ghibliapi-0.0.1-SNAPSHOT.jar"]
