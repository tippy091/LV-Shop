package org.devlearn.lvshopserver.auth.helper;

import java.util.Random;

/**
 * @author tippy091
 * @created 07/04/2025
 * @project server
 **/



public class VerificationCodeGenerator {
    public static String generateCode() {
        Random random = new Random();

        int code = 10000 + random.nextInt(900000);
        return String.valueOf(code);



    }


}
