package cn.qhjys.mall.util.ms;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 日期时间转换工具类
 */
public class DateUtil {

	public static String DEFAULT_PATTERN = "yyyy-MM-dd";
	public static String DIR_PATTERN = "yyyy/MM/dd/";
	public static String TIMESTAMP_PATTERN = "yyyy-MM-dd HH:mm:ss";
	public static String TIMES_PATTERN = "HH:mm:ss";
	public static String NOCHAR_PATTERN = "yyyyMMddHHmmss";

	/**
	 * 日期转换为字符串
	 * 
	 * @param date
	 *            日期
	 * @param format
	 *            日期格式
	 * @return 指定格式的日期字符串
	 */
	public static String formatDateByFormat(Date date, String format) {
		String result = "";
		if (date != null) {
			try {
				SimpleDateFormat sdf = new SimpleDateFormat(format);
				result = sdf.format(date);
			} catch (Exception ex) {
				ex.printStackTrace();
			}
		}
		return result;
	}

	/**
	 * 转换为默认格式(yyyy-MM-dd)的日期字符串
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static String formatDefaultDate(Date date) {
		return formatDateByFormat(date, DEFAULT_PATTERN);
	}

	/**
	 * 转换为默认格式(yyyy-MM-dd)的日期字符串
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static String formatDefaultDate(Date date,String formatter) {
		return formatDateByFormat(date, formatter);
	}

	
	/**
	 * 转换为目录格式(yyyy/MM/dd/)的日期字符串
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static String formatDirDate(Date date) {
		return formatDateByFormat(date, DIR_PATTERN);
	}

	/**
	 * 转换为完整格式(yyyy-MM-dd HH:mm:ss)的日期字符串
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static String formatTimesTampDate(Date date) {
		return formatDateByFormat(date, TIMESTAMP_PATTERN);
	}

	/**
	 * 转换为时分秒格式(HH:mm:ss)的日期字符串
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static String formatTimesDate(Date date) {
		return formatDateByFormat(date, TIMES_PATTERN);
	}

	/**
	 * 转换为时分秒格式(HH:mm:ss)的日期字符串
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static String formatNoCharDate(Date date) {
		return formatDateByFormat(date, NOCHAR_PATTERN);
	}

	/**
	 * 日期格式字符串转换为日期对象
	 * 
	 * @param strDate
	 *            日期格式字符串
	 * @param pattern
	 *            日期对象
	 * @return
	 */
	public static Date parseDate(String strDate, String pattern) {
		try {
			SimpleDateFormat format = new SimpleDateFormat(pattern);
			Date nowDate = format.parse(strDate);
			return nowDate;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 字符串转换为默认格式(yyyy-MM-dd)日期对象
	 * 
	 * @param date
	 * 
	 * @return
	 * 
	 * @throws Exception
	 */
	public static Date parseDefaultDate(String date) {
		return parseDate(date, DEFAULT_PATTERN);
	}

	/**
	 * 字符串转换为完整格式(yyyy-MM-dd HH:mm:ss)日期对象
	 * 
	 * @param date
	 * 
	 * @return
	 * 
	 * @throws Exception
	 */
	public static Date parseTimesTampDate(String date) {
		return parseDate(date, TIMESTAMP_PATTERN);
	}

	/**
	 * 获得当前时间
	 * 
	 * @return
	 */
	public static Date getCurrentDate() {
		Calendar calendar = Calendar.getInstance();
		return calendar.getTime();
	}

	/**
	 * 获得当前时间 返回Timestamp
	 * 
	 * @return Timestamp
	 */
	public static Timestamp getCurrentTimestamp() {
		return new Timestamp(new Date().getTime());
	}

	/**
	 * sql Date 转 util Date
	 * 
	 * @param date
	 *            java.sql.Date日期
	 * @return java.util.Date
	 */
	public static Date parseUtilDate(java.sql.Date date) {
		return date;
	}

	/**
	 * util Date 转 sql Date
	 * 
	 * @param date
	 *            java.sql.Date日期
	 * @return
	 */
	public static java.sql.Date parseSqlDate(Date date) {
		return new java.sql.Date(date.getTime());
	}

	/**
	 * 获取年份
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static int getYear(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.get(Calendar.YEAR);
	}

	/**
	 * 获取月份
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static int getMonth(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.get(Calendar.MONTH) + 1;
	}

	/**
	 * 获取星期
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static int getWeek(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		int dayOfWeek = c.get(Calendar.DAY_OF_WEEK);
		dayOfWeek = dayOfWeek - 1;
		if (dayOfWeek == 0) {
			dayOfWeek = 7;
		}
		return dayOfWeek;
	}

	/**
	 * 获取日期(多少号)
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static int getDay(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.get(Calendar.DAY_OF_MONTH);
	}

	/**
	 * 获取当前时间(小时)
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static int getHour(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.get(Calendar.HOUR_OF_DAY);
	}

	/**
	 * 获取当前时间(分)
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static int getMinute(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.get(Calendar.MINUTE);
	}

	/**
	 * 获取当前时间(秒)
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static int getSecond(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.get(Calendar.SECOND);
	}

	/**
	 * 获取当前毫秒
	 * 
	 * @param date
	 * 
	 * @return
	 */
	public static long getMillis(Date date) {
		Calendar c = Calendar.getInstance();
		c.setTime(date);
		return c.getTimeInMillis();
	}

	/**
	 * 日期增加
	 * 
	 * @param date
	 *            Date
	 * 
	 * @param day
	 *            int
	 * 
	 * @return Date
	 */
	public static Date addDate(Date date, int day) {
		java.util.Calendar c = java.util.Calendar.getInstance();
		c.setTimeInMillis(getMillis(date) + ((long) day) * 24 * 3600 * 1000);
		return c.getTime();
	}

	/**
	 * 日期相减(返回天数)
	 * 
	 * @param date
	 *            Date
	 * 
	 * @param date1
	 *            Date
	 * 
	 * @return int 相差的天数
	 */
	public static int diffDate(Date date, Date date1) {
		return (int) ((getMillis(date) - getMillis(date1)) / (24 * 3600 * 1000));
	}

	/**
	 * 日期相减(返回秒值)
	 * 
	 * @param date
	 *            Date
	 * @param date1
	 *            Date
	 * @return int
	 * @author
	 */
	public static Long diffDateTime(Date date, Date date1) {
		return (Long) ((getMillis(date) - getMillis(date1)) / 1000);
	}

	/**
	 * 获取今天的凌晨 时间
	 * 
	 * @param date
	 * @param n
	 * @return
	 */
	public static Date getCurrentStartDate() {
		Calendar c = Calendar.getInstance();  
		c.setTime(getCurrentDate());  
		c.set(Calendar.HOUR_OF_DAY, 0);  
		c.set(Calendar.MINUTE, 0);  
		c.set(Calendar.SECOND, 0);  
		return c.getTime();  
	}
	
	/**
	 * 获取今天的23:59:59时间
	 * 
	 * @param date
	 * @param n
	 * @return
	 */
	public static Date getCurrentEndDate() {
		Calendar c = Calendar.getInstance();  
		c.setTime(getCurrentDate());  
		c.set(Calendar.HOUR_OF_DAY, 23);  
		c.set(Calendar.MINUTE, 59);  
		c.set(Calendar.SECOND, 59);  
		return c.getTime();  
	}

	
	
	/**
	 * 获取今天的凌晨 时间
	 * 
	 * @param date
	 * @param n
	 * @return
	 */
	public static Date getDateStartDate(Date date) {
		Calendar c = Calendar.getInstance();  
		c.setTime(date);  
		c.set(Calendar.HOUR_OF_DAY, 0);  
		c.set(Calendar.MINUTE, 0);  
		c.set(Calendar.SECOND, 0);  
		return c.getTime();  
	}
	
	/**
	 * 获取今天的23:59:59时间
	 * 
	 * @param date
	 * @param n
	 * @return
	 */
	public static Date getDateEndDate(Date date) {
		Calendar c = Calendar.getInstance();  
		c.setTime(date);  
		c.set(Calendar.HOUR_OF_DAY, 23);  
		c.set(Calendar.MINUTE, 59);  
		c.set(Calendar.SECOND, 59);  
		return c.getTime();  
	}
	
	/**
	 * 获取今天的23:00:00时间
	 * 
	 * @param date
	 * @param n
	 * @return
	 */
	public static Date getDateThree(Date date) {
		Calendar c = Calendar.getInstance();  
		c.setTime(date);  
		c.set(Calendar.HOUR_OF_DAY, 23);  
		c.set(Calendar.MINUTE, 00);  
		c.set(Calendar.SECOND, 00);  
		return c.getTime();  
	}
	
	
	/**
	 * 获取两个时间差##天##时##分
	 * 
	 * @param date1
	 * @param date2
	 * @return
	 */
	public static String getTimeDifference(Date date1, Date date2) {
		int hour = 0;
		int minute = 0;
		int day;
		long total_minute = 0;
		StringBuffer sb = new StringBuffer();
		total_minute = (date1.getTime() - date2.getTime()) / (1000 * 60);
		day = (int) total_minute / 60 / 24;
		hour = (int) total_minute / 60 % 24;
		minute = (int) total_minute % 60;
		/*sb.append(day).append("天").append(hour).append("小时").append(minute).append("分钟");*/
		if(day!=0){
			sb.append(day).append("天");
		}
//		if(hour!=0){
//			sb.append(hour).append("小时");
//		}
//		if(minute!=0){
//			sb.append(minute).append("分钟");
//		}
		return sb.toString();
	}

	/**
	 * 获取两个时间差##天##时##分
	 * 
	 * @param date1
	 * @param date2
	 * @return
	 */
	public static Long getTimeDifferenceMinute(Date date1, Date date2) {
		return (date1.getTime() - date2.getTime()) / (1000 * 60);
	}

	/**
	   * 得到几天前的时间
	   * @param d
	   * @param day
	   * @return
	   */
	  public static Date getDateBefore(Date d,int day){
	   Calendar now =Calendar.getInstance();
	   now.setTime(d);
	   now.set(Calendar.DATE,now.get(Calendar.DATE)-day);
	   now.set(Calendar.HOUR_OF_DAY, 0);  
	   now.set(Calendar.MINUTE, 0);  
	   now.set(Calendar.SECOND, 0);  
	   return now.getTime();
	  }
	  
	  /**
	   * 得到几天后的时间
	   * @param d
	   * @param day
	   * @return
	   */
	  public static Date getDateAfter(Date d,int day){
	   Calendar now =Calendar.getInstance();
	   now.setTime(d);
	   now.set(Calendar.DATE,now.get(Calendar.DATE)+day);
	   return now.getTime();
	  }



}