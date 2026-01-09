using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Controllers;


/// <summary>
/// Controller for managing employees.
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class EmployeeController : Controller
{
    private readonly AppDbContext _context;

    /// <summary>
    /// Initializes a new instance of the <see cref="EmployeeController"/> class.
    /// </summary>
    /// <param name="context">The database context.</param>
    public EmployeeController(AppDbContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Gets the list of all employees.
    /// </summary>
    /// <returns>A list of employees.</returns>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
    {
        return await _context.Employees.ToListAsync();
    }

    /// <summary>
    /// Gets an employee by ID.
    /// </summary>
    /// <param name="id">The employee ID.</param>
    /// <returns>The employee with the specified ID.</returns>
    [HttpGet("{id}")]
    public async Task<ActionResult<Employee>> GetEmployee(int id)
    {
        var employee = await _context.Employees.FindAsync(id);
        if (employee == null)
        {
            return NotFound();
        }
        return employee;
    }

    /// <summary>
    /// Updates an existing employee.
    /// </summary>
    /// <param name="id">The employee ID.</param>
    /// <param name="employee">The employee object with updated data.</param>
    /// <returns>An IActionResult.</returns>
    [HttpPut("{id}")]
    public async Task<IActionResult> PutEmployee(int id, Employee employee)
    {
        if (id != employee.Id)
        {
            return BadRequest("ID mismatch");
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Entry(employee).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
            return NoContent();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!EmployeeExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
    }

    /// <summary>
    /// Creates a new employee.
    /// </summary>
    /// <param name="employee">The employee object to create.</param>
    /// <returns>The created employee.</returns>
    [HttpPost]
    public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Employees.Add(employee);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetEmployee", new { id = employee.Id }, employee);
    }

    /// <summary>
    /// Deletes an employee by ID.
    /// </summary>
    /// <param name="id">The employee ID.</param>
    /// <returns>An IActionResult.</returns>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEmployee(int id)
    {
        var employee = await _context.Employees.FindAsync(id);
        if (employee == null)
        {
            return NotFound();
        }
        _context.Employees.Remove(employee);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    /// <summary>
    /// Checks if an employee exists by ID.
    /// </summary>
    /// <param name="id">The employee ID.</param>
    /// <returns>True if the employee exists, otherwise false.</returns>
    private bool EmployeeExists(int id)
    {
        return _context.Employees.Any(e => e.Id == id);
    }
}