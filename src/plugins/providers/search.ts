/**
 * Base interface defining common properties shared across all plugin search response types.
 * Provides foundational metadata for content discovery results.
 */
interface BasePluginSearchResponse {
  /** Display name or title of the discovered content */
  name: string;
  /** Username or entity responsible for uploading the content */
  uploader: string;
  /**
   * Primary content identifier - format varies by type:
   * - DDL: HTTP/HTTPS download URL
   * - Magnet: magnet:// URI
   * - Torrent: Direct .torrent file URL
   */
  return: string;
  /** Content size in bytes, or undefined if unavailable */
  size?: number;
  /** Target game version compatibility identifier */
  game_version?: string;
  /** Access password if content is protected, null if no password required */
  password?: string;
  /**
   * Original upload timestamp in ISO 8601 format
   * @example "2024-01-15T14:30:00Z"
   */
  uploadedAt?: string;
  /** Content summary or additional details */
  description?: string;
  /**
   * Supported platform identifiers
   * @example ["Windows", "macOS", "Linux"]
   */
  platform?: string[];
}

/**
 * Search response format for peer-to-peer content distribution.
 * Extends base properties with torrent-specific metadata.
 */
interface TorrentPluginSearchResponse extends BasePluginSearchResponse {
  /** Content distribution method - distinguishes magnet links from torrent files */
  type: "magnet" | "torrent";
  /** Active seeder count providing upload bandwidth */
  seeds: number;
  /** Active peer count downloading content */
  leechs?: number; 
  /** Total file count within the torrent package */
  fileCount?: number;
}

/**
 * Search response format for direct HTTP/HTTPS downloads.
 * Extends base properties with file integrity and availability data.
 */
interface DDLPluginSearchResponse extends BasePluginSearchResponse {
  /** Content distribution method for direct downloads */
  type: "ddl";
  /**
   * File integrity verification hashes
   * @example { "sha256": "a1b2c3...", "md5": "d4e5f6..." }
   */
  checksums?: {
    md5?: string;
    sha1?: string;
    sha256?: string;
  };
  /**
   * Download link health status
   * - "active": Verified working download
   * - "dead": Non-functional link
   * - "unverified": Status unknown
   */
  status?: "active" | "dead" | "unverified" | string;
}

/**
 * Discriminated union type for all plugin search responses.
 * 
 * Type discrimination occurs via the `type` property, enabling type-safe
 * handling of different response formats in consuming code.
 */
export type PluginSearchResponse =
  | TorrentPluginSearchResponse
  | DDLPluginSearchResponse;
