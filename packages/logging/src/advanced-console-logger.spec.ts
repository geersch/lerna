import { AdvancedConsoleLogger } from './advanced-console.logger';
import { LogLevel } from './log-level.enum';

describe('AdvancedConsoleLogger', () => {
  let mockedDebug: jest.SpyInstance;
  let mockedInfo: jest.SpyInstance;
  let mockedWarn: jest.SpyInstance;
  let mockedError: jest.SpyInstance;

  beforeEach(() => {
    mockedDebug = jest.spyOn(console, 'debug').mockReturnValue();
    mockedInfo = jest.spyOn(console, 'info').mockReturnValue();
    mockedWarn = jest.spyOn(console, 'warn').mockReturnValue();
    mockedError = jest.spyOn(console, 'error').mockReturnValue();
  });

  afterEach(() => {
    mockedDebug.mockRestore();
    mockedInfo.mockRestore();
    mockedWarn.mockRestore();
    mockedError.mockRestore();
  });

  describe('LogLevel: Debug', () => {
    const logger = new AdvancedConsoleLogger(LogLevel.Debug);

    test('should log debug messages', () => {
      logger.debug('this is a test');

      expect(mockedDebug).toBeCalledTimes(1);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log info messages', () => {
      logger.info('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(1);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log warning messages', () => {
      logger.warning('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(1);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log error messages', () => {
      logger.error('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(1);
    });
  });

  describe('LogLevel: Info', () => {
    const logger = new AdvancedConsoleLogger(LogLevel.Info);

    test('should not log debug messages', () => {
      logger.debug('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log info messages', () => {
      logger.info('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(1);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log warning messages', () => {
      logger.warning('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(1);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log error messages', () => {
      logger.error('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(1);
    });
  });

  describe('LogLevel: Warning', () => {
    const logger = new AdvancedConsoleLogger(LogLevel.Warning);

    test('should not log debug messages', () => {
      logger.debug('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should not log info messages', () => {
      logger.info('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log warning messages', () => {
      logger.warning('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(1);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log error messages', () => {
      logger.error('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(1);
    });
  });

  describe('LogLevel: Error', () => {
    const logger = new AdvancedConsoleLogger(LogLevel.Error);

    test('should not log debug messages', () => {
      logger.debug('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should not log info messages', () => {
      logger.info('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should not log warning messages', () => {
      logger.warning('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log error messages', () => {
      logger.error('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(1);
    });
  });

  describe('LogLevel: false', () => {
    const logger = new AdvancedConsoleLogger(false);

    test('should not log debug messages', () => {
      logger.debug('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should not log info messages', () => {
      logger.info('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should not log warning messages', () => {
      logger.warning('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should not log error messages', () => {
      logger.error('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });
  });

  describe('LogLevel: all', () => {
    const logger = new AdvancedConsoleLogger('all');

    test('should log debug messages', () => {
      logger.debug('this is a test');

      expect(mockedDebug).toBeCalledTimes(1);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log info messages', () => {
      logger.info('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(1);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log warning messages', () => {
      logger.warning('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(1);
      expect(mockedError).toBeCalledTimes(0);
    });

    test('should log error messages', () => {
      logger.error('this is a test');

      expect(mockedDebug).toBeCalledTimes(0);
      expect(mockedInfo).toBeCalledTimes(0);
      expect(mockedWarn).toBeCalledTimes(0);
      expect(mockedError).toBeCalledTimes(1);
    });
  });
});
