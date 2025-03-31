package org.devlearn.lvshopserver.config;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/


@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Louis Vuitton API").description("Louis Vuitton E-commerce Application")
                        .version("1.0")
                        .contact(new Contact()
                                .name("Louis Pham")));
    }
}
