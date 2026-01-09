using System.ComponentModel.DataAnnotations;

namespace WebApi.Models;

public class Employee
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Name is required")]
    [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Department is required")]
    [StringLength(50, ErrorMessage = "Department cannot exceed 50 characters")]
    public string Department { get; set; } = string.Empty;

    [Required(ErrorMessage = "Position is required")]
    [StringLength(50, ErrorMessage = "Position cannot exceed 50 characters")]
    public string Position { get; set; } = string.Empty;

    [Range(0, double.MaxValue, ErrorMessage = "Salary must be a positive number")]
    public decimal Salary { get; set; }
}