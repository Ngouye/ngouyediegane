FROM maven:3.8.8-eclipse-temurin-17 AS builder
WORKDIR /build

# Copy project and build the Spring Boot jar
COPY . /build
RUN mvn -B package -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app

# Copy jar built by Maven
COPY --from=builder /build/target/*.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
