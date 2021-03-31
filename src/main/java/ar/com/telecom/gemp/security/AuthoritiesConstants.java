package ar.com.telecom.gemp.security;

/**
 * Constants for Spring Security authorities.
 */
public final class AuthoritiesConstants {
    public static final String ADMIN = "AD";
    public static final String GESTION_OPERATIVA = "GO";

    public static final String USER = "ROLE_USER";

    public static final String ANONYMOUS = "ROLE_ANONYMOUS";

    private AuthoritiesConstants() {}
}
