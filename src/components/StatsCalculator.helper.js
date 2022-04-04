class StatsCalculatorHelper {
  constructor() {
    this.bracketSizes = [30, 9, 8, 7, 12, 60];
    this.percentToFlatRatios = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 0];
    this.flatToPercentRatios = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0];

    this.bracketSizesSpeed = [10, 4.16666666, 3.57142858, 999999];
    this.percentToFlatRatiosSpeed = [1, 1.2, 1.4, 1.6];
    this.flatToPercentRatiosSpeed = [1, 0.8, 0.6, 0.4];

    this.criticalTable = [
      0,
      2.704760381,
      2.704760381,
      2.704760381,
      2.704760381,
      2.704760381, //    5
      2.704760381,
      2.704760381,
      2.704760381,
      2.704760381,
      2.704760381, //   10
      2.704760381,
      2.8399984,
      2.975236419,
      3.110474438,
      3.245712457, //   15
      3.380950476,
      3.516188495,
      3.651426514,
      3.786664533,
      3.921902552, //   20
      4.057140571,
      4.19237859,
      4.327616609,
      4.462854628,
      4.598092647, //   25
      4.737322892,
      4.88209548,
      5.032659304,
      5.189275662,
      5.352218918, //   30
      5.521777213,
      5.698253213,
      5.881964896,
      6.073246395,
      6.272448877, //   35
      6.479941485,
      6.696112333,
      6.921369552,
      7.156142407,
      7.400882478, //   40
      7.676707786,
      7.962812896,
      8.259580927,
      8.567409279,
      8.886710161, //   45
      9.217911147,
      9.561455743,
      9.917803988,
      10.28743306,
      10.67083793, //   50
      11.78114906,
      13.00698914,
      14.36037908,
      15.85459057,
      17.50427622, //   55
      19.32561328,
      21.33646224,
      23.55654201,
      26.00762324,
      35.00000009, //   60
    ];

    this.hasteTable = [
      0,
      2.550202644,
      2.550202644,
      2.550202644,
      2.550202644,
      2.550202644, //    5
      2.550202644,
      2.550202644,
      2.550202644,
      2.550202644,
      2.550202644, //   10
      2.550202644,
      2.677712777,
      2.805222909,
      2.932733041,
      3.060243173, //   15
      3.187753306,
      3.315263438,
      3.44277357,
      3.570283702,
      3.697793835, //   20
      3.825303967,
      3.952814099,
      4.080324231,
      4.207834363,
      4.335344496, //   25
      4.466618727,
      4.603118595,
      4.745078773,
      4.892745624,
      5.046377837, //   30
      5.206247087,
      5.372638744,
      5.545852617,
      5.726203744,
      5.914023226, //   35
      6.109659115,
      6.313477343,
      6.525862721,
      6.747219984,
      6.977974908, //   40
      7.23803877,
      7.507795016,
      7.787604874,
      8.077843034,
      8.378898152, //   45
      8.691173367,
      9.015086844,
      9.351072331,
      9.699579745,
      10.06107577, //   50
      11.10794054,
      12.26373262,
      13.53978599,
      14.94861396,
      16.50403187, //   55
      18.22129252,
      20.11723583,
      22.21045389,
      24.52147334,
      33.00000009, //   60
    ];

    this.versatilityTable = [
      0,
      3.091154721,
      3.091154721,
      3.091154721,
      3.091154721,
      3.091154721, //    5
      3.091154721,
      3.091154721,
      3.091154721,
      3.091154721,
      3.091154721, //   10
      3.091154721,
      3.245712457,
      3.400270193,
      3.554827929,
      3.709385665, //   15
      3.863943401,
      4.018501137,
      4.173058873,
      4.327616609,
      4.482174345, //   20
      4.636732081,
      4.791289817,
      4.945847553,
      5.100405289,
      5.254963025, //   25
      5.414083305,
      5.579537691,
      5.751610634,
      5.930600757,
      6.11682162, //   30
      6.310602529,
      6.512289386,
      6.722245596,
      6.940853023,
      7.168513002, //   35
      7.405647412,
      7.65269981,
      7.910136631,
      8.178448466,
      8.458151403, //   40
      8.773380327,
      9.100357595,
      9.439521059,
      9.79132489,
      10.15624018, //   45
      10.5347556,
      10.92737799,
      11.33463313,
      11.75706636,
      12.19524335, //   50
      13.46417035,
      14.86513044,
      16.4118618,
      18.11953208,
      20.00488711, //   55
      22.08641518,
      24.38452828,
      26.92176229,
      29.72299799,
      40.0000001, //   60
    ];

    this.masteryTable = [
      0,
      2.704760381,
      2.704760381,
      2.704760381,
      2.704760381,
      2.704760381, //    5
      2.704760381,
      2.704760381,
      2.704760381,
      2.704760381,
      2.704760381, //   10
      2.704760381,
      2.8399984,
      2.975236419,
      3.110474438,
      3.245712457, //   15
      3.380950476,
      3.516188495,
      3.651426514,
      3.786664533,
      3.921902552, //   20
      4.057140571,
      4.19237859,
      4.327616609,
      4.462854628,
      4.598092647, //   25
      4.737322892,
      4.88209548,
      5.032659304,
      5.189275662,
      5.352218918, //   30
      5.521777213,
      5.698253213,
      5.881964896,
      6.073246395,
      6.272448877, //   35
      6.479941485,
      6.696112333,
      6.921369552,
      7.156142407,
      7.400882478, //   40
      7.676707786,
      7.962812896,
      8.259580927,
      8.567409279,
      8.886710161, //   45
      9.217911147,
      9.561455743,
      9.917803988,
      10.28743306,
      10.67083793, //   50
      11.78114906,
      13.00698914,
      14.36037908,
      15.85459057,
      17.50427622, //   55
      19.32561328,
      21.33646224,
      23.55654201,
      26.00762324,
      35.00000009, //   60
    ];

    this.leechTable = [];

    this.speedTable = [
      0,
      0.77278868,
      0.77278868,
      0.77278868,
      0.77278868,
      0.77278868, // 5
      0.77278868,
      0.77278868,
      0.77278868,
      0.77278868,
      0.77278868, // 10
      0.77278868,
      0.811428114,
      0.850067548,
      0.888706982,
      0.927346416, // 15
      0.96598585,
      1.004625284,
      1.043264718,
      1.081904152,
      1.120543586, // 20
      1.15918302,
      1.197822454,
      1.236461888,
      1.275101322,
      1.313740756, // 25
      1.353520826,
      1.394884423,
      1.437902658,
      1.482650189,
      1.529205405, // 30
      1.577650632,
      1.628072347,
      1.680561399,
      1.735213256,
      1.79212825, // 35
      1.851411853,
      1.913174952,
      1.977534158,
      2.044612116,
      2.114537851, // 40
      2.193345082,
      2.275089399,
      2.359880265,
      2.447831223,
      2.539060046, // 45
      2.633688899,
      2.731844498,
      2.833658282,
      2.939266589,
      3.048810838, // 50
      3.366042588,
      3.716282611,
      4.102965451,
      4.529883019,
      5.001221777, // 55
      5.521603794,
      6.096132069,
      6.730440573,
      7.430749497,
      10.00000003, // 60
    ];

    this.specsWithHigherBaseCrit = [
      'marksmanship',
      'beastmastery',
      'survival',
      'enhancement',
      'assassination',
      'subtlety',
      'outlaw',
      'windwalker',
      'brewmaster',
      'feral',
      'guardian',
      'havoc',
      'vengeance',
    ];

    this.masteryRatios = {
      deathknight: {
        blood: 2,
        frost: 2,
        unholy: 1.8,
      },
      demonhunter: {
        havoc: 1.8,
        vengeance: 3,
      },
      druid: {
        balance: 1.1,
        feral: 2,
        guardian: 0.5,
        restoration: 0.5,
      },
      hunter: {
        beastmastery: 1.9,
        marksmanship: 0.625,
        survival: 1.65,
      },
      mage: {
        arcane: 1.2,
        fire: 0.75,
        frost: 1.9,
      },
      monk: {
        brewmaster: 1,
        mistweaver: 4.2,
        windwalker: 1.25,
      },
      paladin: {
        holy: 1.5,
        protection: 1,
        retribution: 1.6,
      },
      priest: {
        discipline: 1.35,
        holy: 1.25,
        shadow: 0.5,
      },
      rogue: {
        assassination: 1.7,
        outlaw: 1.45,
        subtlety: 2.45,
      },
      shaman: {
        elemental: 1.875,
        enhancement: 2,
        restoration: 3,
      },
      warlock: {
        affliction: 2.5,
        demonology: 1.45,
        destruction: 2,
      },
      warrior: {
        arms: 1.1,
        fury: 1.4,
        protection: 1.5,
      },
    };
  }

  /**
   * Get bracket caps.
   *
   * Usage: `this.getBracketCaps(this.hasteTable[20]);` --- Returns bracket caps for haste at level 20.
   *
   * @param {Number} value
   * @returns {Array}
   */
  getBracketCaps(value, speed = false) {
    let result = [];
    for (
      let index = 0;
      index <
      (speed ? this.bracketSizesSpeed.length : this.bracketSizes.length);
      index++
    ) {
      const size = speed
        ? this.bracketSizesSpeed[index]
        : this.bracketSizes[index];

      result.push(
        index === 0
          ? size *
              (Math.round((value + Number.EPSILON) * 100) / 100) *
              (speed
                ? this.percentToFlatRatiosSpeed[index]
                : this.percentToFlatRatios[index])
          : result[index - 1] +
              size *
                (Math.round((value + Number.EPSILON) * 100) / 100) *
                (speed
                  ? this.percentToFlatRatiosSpeed[index]
                  : this.percentToFlatRatios[index])
      );

      if (
        index + 1 ===
        (speed ? this.bracketSizesSpeed.length : this.bracketSizes.length)
      ) {
        result.push(9999);
      }
    }

    return result;
  }

  /**
   * Convert flat stats to % values.
   *
   * @param {Number} rating Stat rating
   * @param {Number} base % for 1 point
   * @param {Array} caps Bracket caps (e.g. 30%, 39%, 47% etc.)
   * @param {Array} dr Diminishing returns at each bracket (e.g. 0.9, 0.8 etc.)
   * @returns {Number}
   */
  flatToPercent(rating, base, caps, speed = false) {
    let result;
    const dr = speed ? this.flatToPercentRatiosSpeed : this.flatToPercentRatios;

    if (rating < 0) {
      return 0;
    }

    switch (true) {
      // 1st cap
      case caps[0] && rating <= caps[0]:
        result = rating * base * dr[0];
        break;

      // 2nd cap
      case caps[1] && rating <= caps[1]:
        result =
          caps[0] * base * dr[0] + // 1st cap
          (rating - caps[0]) * base * dr[1]; // 2nd cap
        break;

      // 3rd cap
      case caps[2] && rating <= caps[2]:
        result =
          caps[0] * base * dr[0] + // 1st cap
          (caps[1] - caps[0]) * base * dr[1] + // 2nd cap
          (rating - caps[1]) * base * dr[2]; // 3rd cap
        break;

      // 4th cap
      case caps[3] && rating <= caps[3]:
        result =
          caps[0] * base * dr[0] + // 1st cap
          (caps[1] - caps[0]) * base * dr[1] + // 2nd cap
          (caps[2] - caps[1]) * base * dr[2] + // 3rd cap
          (rating - caps[2]) * base * dr[3]; // 4th cap
        break;

      // 5th cap
      case caps[4] && rating <= caps[4]:
        result =
          caps[0] * base * dr[0] + // 1st cap
          (caps[1] - caps[0]) * base * dr[1] + // 2nd cap
          (caps[2] - caps[1]) * base * dr[2] + // 3rd cap
          (caps[3] - caps[2]) * base * dr[3] + // 4th cap
          (rating - caps[3]) * base * dr[4]; // 5th cap
        break;

      // 6th cap
      case caps[5] && rating <= caps[5]:
        result =
          caps[0] * base * dr[0] + // 1st cap
          (caps[1] - caps[0]) * base * dr[1] + // 2nd cap
          (caps[2] - caps[1]) * base * dr[2] + // 3rd cap
          (caps[3] - caps[2]) * base * dr[3] + // 4th cap
          (caps[4] - caps[3]) * base * dr[4] + // 5th cap
          (rating - caps[4]) * base * dr[5]; // 6th cap
        break;

      // 7th cap
      case caps[5] && rating > caps[5]:
        result =
          caps[0] * base * dr[0] + // 1st cap
          (caps[1] - caps[0]) * base * dr[1] + // 2nd cap
          (caps[2] - caps[1]) * base * dr[2] + // 3rd cap
          (caps[3] - caps[2]) * base * dr[3] + // 4th cap
          (caps[4] - caps[3]) * base * dr[4] + // 5th cap
          (caps[5] - caps[4]) * base * dr[5]; // 6th cap
        break;
      default:
        break;
    }

    return Number(result.toFixed(2));
  }

  /**
   * Calculate haste.
   *
   * @param {Number} rating
   * @param {Number} level
   * @returns {Number}
   */
  haste(rating, level) {
    return this.flatToPercent(
      rating,
      1 / this.hasteTable[level],
      this.getBracketCaps(this.hasteTable[level])
    );
  }

  /**
   * Calculate versatility.
   *
   * @param {Number} rating
   * @param {Number} level
   * @returns {Number}
   */
  versatility(rating, level) {
    return this.flatToPercent(
      rating,
      1 / this.versatilityTable[level],
      this.getBracketCaps(this.versatilityTable[level])
    );
  }

  /**
   * Calculate critical strike.
   *
   * @param {Number} rating
   * @param {Number} level
   * @param {String} spec
   * @returns {Number}
   */
  critical(rating, level, spec) {
    let result = this.specsWithHigherBaseCrit.includes(spec) ? 10 : 5;
    return (result += this.flatToPercent(
      rating,
      1 / this.criticalTable[level],
      this.getBracketCaps(this.criticalTable[level])
    ));
  }

  /**
   * Calculate mastery.
   *
   * @param {Number} rating
   * @param {Number} level
   * @param {String} characterClass
   * @param {String} spec
   * @returns {Number}
   */
  mastery(rating, level, characterClass, spec) {
    let specRatio = this.masteryRatios[characterClass][spec];
    let result = 8 * specRatio;

    return (result +=
      specRatio *
      this.flatToPercent(
        rating,
        1 / this.masteryTable[level],
        this.getBracketCaps(this.masteryTable[level])
      ));
  }

  /**
   * Calculate speed.
   *
   * @param {Number} rating
   * @param {Number} level
   * @returns {Number}
   */
  speed(rating, level) {
    return this.flatToPercent(
      rating,
      1 / this.speedTable[level],
      this.getBracketCaps(this.speedTable[level], true),
      true
    );
  }
}

export default new StatsCalculatorHelper();
